import { Router } from "express";
import { db } from "utils/kysely";
import fetch from "node-fetch";
import { sql } from "kysely";
import { KyselyDB } from "types/database.t";

const router = Router();

router.get("/user", async (req, res) => {
  const { fid, fname } = req.query;
  const fidQuery = sql<KyselyDB['users']>`
    SELECT 
        *,
        CONCAT('0x', encode(custody_address, 'hex')) as custody_address
    FROM 
        users 
    WHERE 
        fid = CAST(${fid} AS bigint) 
    LIMIT 1;
`;

  const fnameQuery = sql<KyselyDB['users']>`
      SELECT 
          *,
          CONCAT('0x', encode(custody_address, 'hex')) as custody_address
      FROM 
          users 
      WHERE 
          fname = ${fname} 
      LIMIT 1;
  `;

  const user = fid ? await fidQuery.execute(db) : await fnameQuery.execute(db);
  return res.json({
    user: user.rows[0]
  });
});

router.get("/ensLeaderboard", async (req, res) => {
    // TODO: change so the userProfile is retrieved from Farcaster Kit and not from Warpcast
    type WarpcastUserProfileResponse = {
        result: {
          user: {
            fid: number;
            username: string;
            displayName: string;
            pfp: {
              url: string;
              verified: boolean;
            };
            profile: {
              bio: {
                text: string;
                mentions: string[];
                channelMentions: any[];
              };
              location: {
                placeId: string;
                description: string;
              };
            };
            followerCount: number;
            followingCount: number;
            activeOnFcNetwork: boolean;
            referrerUsername: string;
            viewerContext: {
              following: boolean;
              followedBy: boolean;
              canSendDirectCasts: boolean;
              hasUploadedInboxKeys: boolean;
            };
          };
          inviterIsReferrer: boolean;
          collectionsOwned: any[];
          extras: {
            fid: number;
            custodyAddress: string;
          };
        };
      };

    try {
      const { cursor } = req.query;
      const validCursor = cursor ? cursor : `0`;
      const ethLeaderboardQuery = sql<KyselyDB['ens_leaderboard']>`
        SELECT * FROM ens_leaderboard
        OFFSET ${validCursor}
        LIMIT 100;
      `;
  
      const finalStats = await ethLeaderboardQuery.execute(db);
      // todo: fix replicator so users are up to date and there aren't manual exceptions like this
      const rows = () => {
        if(Number(validCursor) >= 0 && Number(validCursor) < 100){
          return [...finalStats.rows, {
            rank: 14,
            eth_name: 'br1an.eth',
            display: 'briang is live on unlonely',
            pfp: 'https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_png,w_168/https%3A%2F%2Fi.seadn.io%2Fgae%2FT1n8naiIITR2TKLlRyPHDEkKIRhO01WwsTJBfv1_YeUeVbtPnSlhe4MqWuYo0tMyDj9HWV3t3vJYBEKEHVeKHXYo4XIFxqSFfgEVbQ%3Fw%3D500%26auto%3Dformat',
            fid: 548,
            follower_count: 20827
          }, {
            rank: 84,
            eth_name: 'christopherw.eth',
            display: 'Christopher Wallace',
            pfp: 'https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_jpg,w_168/https%3A%2F%2Fi.imgur.com%2FsvJ32DG.jpg',
            fid: 4085,
            follower_count: 2035
          }];
        }
        else if(Number(validCursor) > 700 && Number(validCursor) <= 800){
          return [...finalStats.rows, {
            rank: 1000,
            eth_name: 'ncale.eth',
            display: 'Nick Brodeur',
            pfp: 'https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_jpg,w_168/https%3A%2F%2Fi.imgur.com%2FSfbunk9.jpg',
            fid: 20542,
            follower_count: 26
          }];
        }
        else{
          return finalStats.rows;
        }
      }
  
      const updateFollowersPromises = rows().map((item) => {
        return fetch(`https://client.warpcast.com/v2/user?fid=${item.fid}`)
          .then(response => response.json())
          .then(userFidJson => {
            const newItem = { ...item, follower_count: (userFidJson as WarpcastUserProfileResponse).result.user.followerCount };
            return newItem;
          })
          .catch(error => {
            console.error(`Error fetching data for fid ${item.fid}:`, error);
            return item;
          });
      });
      // makes sure that the rows are sorted by ascending follower_count
      const updatedRows = (await Promise.all(updateFollowersPromises)).sort((itemA, itemB) => Number(itemB.follower_count) - Number(itemA.follower_count));
      const sortedRows = updatedRows.map((item, index) => {
        const newItem = item;
        // resets item.rank since it's no longer set by the materialized view but the new ranking(backed by the Warpcast API's followerCount)
        item.rank = (index + 1) as unknown as bigint;
        return newItem;
      });
      return res.json({ leaderboard: sortedRows });
    } catch (error) {
      console.error('Error in /ensLeaderboard route:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });  

export const UsersRouter = router;
