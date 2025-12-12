import { FarcasterKit } from 'farcasterkit';
import { optimism } from 'viem/chains';

async function main() {
  console.log('🚀 Farcaster Kit Example Script\n');

  const fc = new FarcasterKit('https://snap.farcaster.xyz:3381', {
    chain: optimism,
    rpcUrl: 'https://mainnet.optimism.io',
  });

  console.log('--- HTTP Methods ---\n');

  try {
    console.log('📊 Getting hub info...');
    const info = await fc.getInfo();
    console.log(`  Version: ${info.version}`);
    console.log(`  Syncing: ${info.isSyncing}`);
    console.log(`  Messages: ${info.dbStats.numMessages}`);
    console.log();
  } catch (error) {
    console.error('  Error:', error instanceof Error ? error.message : error);
  }

  try {
    console.log('📝 Getting casts by FID 2...');
    const casts = await fc.getCastsByFid(2, { pageSize: 3 });
    console.log(`  Found ${casts.messages.length} casts`);
    if (casts.messages[0]) {
      console.log(`  Latest cast FID: ${casts.messages[0].data.fid}`);
    }
    console.log();
  } catch (error) {
    console.error('  Error:', error instanceof Error ? error.message : error);
  }

  try {
    console.log('👤 Getting user data for FID 2...');
    const userData = await fc.getUserDataByFid(2);
    console.log(`  User data messages: ${userData.messages.length}`);
    console.log();
  } catch (error) {
    console.error('  Error:', error instanceof Error ? error.message : error);
  }

  try {
    console.log('🔍 Getting FIDs by address...');
    const address = '0x4114e33eb831858649ea3702e1c9a2db3f626446';
    const fids = await fc.getFidsByAddress(address);
    console.log(`  Address: ${address}`);
    console.log(`  FIDs: ${fids.fids.join(', ')}`);
    console.log();
  } catch (error) {
    console.error('  Error:', error instanceof Error ? error.message : error);
  }

  console.log('--- Contract Reads ---\n');

  try {
    console.log('🔢 Getting FID from address...');
    const address = '0x4114e33eb831858649ea3702e1c9a2db3f626446';
    const fid = await fc.getFid(address);
    console.log(`  Address: ${address}`);
    console.log(`  FID: ${fid}`);
    console.log();
  } catch (error) {
    console.error('  Error:', error instanceof Error ? error.message : error);
  }

  try {
    console.log('💾 Getting storage for FID 2...');
    const storage = await fc.getStorage(2);
    console.log(`  Storage units: ${storage}`);
    console.log();
  } catch (error) {
    console.error('  Error:', error instanceof Error ? error.message : error);
  }

  try {
    console.log('🔐 Getting custody address for FID 2...');
    const custody = await fc.idRegistry.read.custodyOf(fc.viemClient, 2n);
    console.log(`  Custody address: ${custody}`);
    console.log();
  } catch (error) {
    console.error('  Error:', error instanceof Error ? error.message : error);
  }

  try {
    console.log('🔧 Getting recovery address for FID 2...');
    const recovery = await fc.idRegistry.read.recoveryOf(fc.viemClient, 2n);
    console.log(`  Recovery address: ${recovery}`);
    console.log();
  } catch (error) {
    console.error('  Error:', error instanceof Error ? error.message : error);
  }

  try {
    console.log('💰 Getting storage price for 1 unit...');
    const price = await fc.storageRegistry.read.price(fc.viemClient, 1n);
    console.log(`  Price: ${price} wei`);
    console.log();
  } catch (error) {
    console.error('  Error:', error instanceof Error ? error.message : error);
  }

  console.log('✅ Example script completed!');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

