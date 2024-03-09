import { Router } from "express";
import fetch from "node-fetch";

const router = Router();

const allowedStrategies = ['follows', 'engagement', 'activity', 'og_circles', 'og_engagement', 'og_activity'];

router.post('/rankings', async (req, res) => {
  try {
    let { strategy, limit, offset } = req.body;

    if (strategy && !allowedStrategies.find((a) => a === strategy)) {
      res.status(400).json({ msg: `incorrect strategy ${strategy}. please choose one from [${allowedStrategies.join(", ")}]` });
      return;
    } else if (!strategy) {
      strategy = 'follows';
    }

    let url = `https://api.cast.k3l.io/rankings?strategy=${strategy}`;
    if (limit) {
      url = `${url}&limit=${limit}`;
    }
    if (offset) {
      url = `${url}&offset=${offset}`;
    }

    const apiResponse = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /rankings route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/ranking_index', async (req, res) => {
  try {
    let { strategy, username } = req.body;

    if (!username) {
      res.status(400).json({ msg: `username is required` });
      return;
    }
    if (strategy && !allowedStrategies.find((a) => a === strategy)) {
      res.status(400).json({ msg: `incorrect strategy ${strategy}. please choose one from [${allowedStrategies.join(", ")}]` });
      return;
    } else if (!strategy) {
      strategy = 'follows';
    }

    let url = `https://api.cast.k3l.io/ranking_index?strategy=${strategy}&username=${username}`;
    const apiResponse = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /ranking_index route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/graph/neighbors/engagement/handles', async (req, res) => {
  try {
    let { handles, k, limit } = req.body;

    if (!handles || handles.length === 0) {
      res.status(400).json({ msg: `handles is required` });
      return;
    }

    let kVal = 2;
    if (k && k > 0) {
      kVal = k;
    }

    let limitVal = 100;
    if (limit && limit > 0) {
      limitVal = limit;
    }

    let url = `https://graph.cast.k3l.io/graph/neighbors/engagement/handles?k=${kVal}&limit=${limitVal}`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(handles),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      console.log(apiResult)
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /graph/neighbors/engagement/handles route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/graph/neighbors/following/handles', async (req, res) => {
  try {
    let { handles, k, limit } = req.body;

    if (!handles || handles.length === 0) {
      res.status(400).json({ msg: `handles is required` });
      return;
    }

    let kVal = 2;
    if (k && k > 0) {
      kVal = k;
    }

    let limitVal = 100;
    if (limit && limit > 0) {
      limitVal = limit;
    }

    let url = `https://graph.cast.k3l.io/graph/neighbors/following/handles?k=${kVal}&limit=${limitVal}`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(handles),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      console.log(apiResult)
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /graph/neighbors/following/handles route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/scores/personalized/engagement/handles', async (req, res) => {
  try {
    let { handles, k, limit } = req.body;

    if (!handles || handles.length === 0) {
      res.status(400).json({ msg: `handles is required` });
      return;
    }

    let kVal = 2;
    if (k && k > 0) {
      kVal = k;
    }

    let limitVal = 100;
    if (limit && limit > 0) {
      limitVal = limit;
    }

    let url = `https://graph.cast.k3l.io/scores/personalized/engagement/handles?k=${kVal}&limit=${limitVal}`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(handles),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /score/personalized/engagement/handles route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/scores/personalized/following/handles', async (req, res) => {
  try {
    let { handles, k, limit } = req.body;

    if (!handles || handles.length === 0) {
      res.status(400).json({ msg: `handles is required` });
      return;
    }

    let kVal = 2;
    if (k && k > 0) {
      kVal = k;
    }

    let limitVal = 100;
    if (limit && limit > 0) {
      limitVal = limit;
    }

    let url = `https://graph.cast.k3l.io/scores/personalized/following/handles?k=${kVal}&limit=${limitVal}`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(handles),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /score/personalized/following/handles route:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.post('/graph/neighbors/engagement/addresses', async (req, res) => {
  try {
    let { addresses, k, limit } = req.body;

    if (!addresses || addresses.length === 0) {
      res.status(400).json({ msg: `addresses is required` });
      return;
    }

    let kVal = 2;
    if (k && k > 0) {
      kVal = k;
    }

    let limitVal = 100;
    if (limit && limit > 0) {
      limitVal = limit;
    }

    let url = `https://graph.cast.k3l.io/graph/neighbors/engagement/addresses?k=${kVal}&limit=${limitVal}`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(addresses),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      console.log(apiResult)
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /graph/neighbors/engagement/addresses route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/graph/neighbors/following/addresses', async (req, res) => {
  try {
    let { addresses, k, limit } = req.body;

    if (!addresses || addresses.length === 0) {
      res.status(400).json({ msg: `addresses is required` });
      return;
    }

    let kVal = 2;
    if (k && k > 0) {
      kVal = k;
    }

    let limitVal = 100;
    if (limit && limit > 0) {
      limitVal = limit;
    }

    let url = `https://graph.cast.k3l.io/graph/neighbors/following/addresses?k=${kVal}&limit=${limitVal}`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(addresses),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      console.log(apiResult)
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /graph/neighbors/following/addresses route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/scores/personalized/engagement/addresses', async (req, res) => {
  try {
    let { addresses, k, limit } = req.body;

    if (!addresses || addresses.length === 0) {
      res.status(400).json({ msg: `addresses is required` });
      return;
    }

    let kVal = 2;
    if (k && k > 0) {
      kVal = k;
    }

    let limitVal = 100;
    if (limit && limit > 0) {
      limitVal = limit;
    }

    let url = `https://graph.cast.k3l.io/scores/personalized/engagement/addresses?k=${kVal}&limit=${limitVal}`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(addresses),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /scores/personalized/engagement/addresses route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/scores/personalized/following/addresses', async (req, res) => {
  try {
    let { addresses, k, limit } = req.body;

    if (!addresses || addresses.length === 0) {
      res.status(400).json({ msg: `addresses is required` });
      return;
    }

    let kVal = 2;
    if (k && k > 0) {
      kVal = k;
    }

    let limitVal = 100;
    if (limit && limit > 0) {
      limitVal = limit;
    }

    let url = `https://graph.cast.k3l.io/scores/personalized/following/addresses?k=${kVal}&limit=${limitVal}`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(addresses),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /scores/personalized/following/addresses route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/scores/personalized/following/addresses', async (req, res) => {
  try {
    let { addresses, k, limit } = req.body;

    if (!addresses || addresses.length === 0) {
      res.status(400).json({ msg: `addresses is required` });
      return;
    }

    let kVal = 2;
    if (k && k > 0) {
      kVal = k;
    }

    let limitVal = 100;
    if (limit && limit > 0) {
      limitVal = limit;
    }

    let url = `https://graph.cast.k3l.io/scores/personalized/following/addresses?k=${kVal}&limit=${limitVal}`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(addresses),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /scores/personalized/following/addresses route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/metadata/handles', async (req, res) => {
  try {
    const handles = req.body;

    if (!handles || handles.length === 0) {
      res.status(400).json({ msg: `handles is required` });
      return;
    }

    let url = `https://graph.cast.k3l.io/metadata/handles`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(handles),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /metadata/handles route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/metadata/addresses', async (req, res) => {
  try {
    const addresses = req.body;

    if (!addresses || addresses.length === 0) {
      res.status(400).json({ msg: `addresses is required` });
      return;
    }

    let url = `https://graph.cast.k3l.io/metadata/addresses`;
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
      body: JSON.stringify(addresses),
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      res.status(200).json(apiResult);
    } else {
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /metadata/addresses route:', error);
    res.status(500).send('Internal Server Error');
  }
});

export const OpenRank = router;
