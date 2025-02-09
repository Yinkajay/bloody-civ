import axios from 'axios';

const API_KEY = process.env.YOUTUBE_API_KEY; // Use an environment variable for the API key

const youtubeMusicDataResponse =  [
  {
      "kind": "youtube#searchResult",
      "etag": "XUiP_cunBR7QJrGC6Xs5K-sCLv8",
      "id": {
          "kind": "youtube#video",
          "videoId": "pr5YwkazQbw"
      },
      "snippet": {
          "publishedAt": "2023-10-06T09:00:09Z",
          "channelId": "UCsvqxWPX9nNdfgrmhorZjRQ",
          "title": "ODUMODUBLVCK, Bloody Civilian, Wale - BLOOD ON THE DANCE FLOOR",
          "description": "STREAM & DOWNLOAD: https://ODUMODUBLVCK.lnk.to/EZIOKWU WATCH MIXTAPE TRAILER: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/pr5YwkazQbw/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/pr5YwkazQbw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/pr5YwkazQbw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "OdumodublvckVEVO",
          "liveBroadcastContent": "none",
          "publishTime": "2023-10-06T09:00:09Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "-O-PLcZzw612-FdFSRshFxzOz1w",
      "id": {
          "kind": "youtube#video",
          "videoId": "UQeio-aTfoM"
      },
      "snippet": {
          "publishedAt": "2023-07-13T17:00:16Z",
          "channelId": "UCngtH048OCuyrUDMbVFgGmA",
          "title": "Bloody Civilian - I Don&#39;t Like You",
          "description": "Bloody Civilian - I Don't Like You (Official Video) Listen to 'I Don't Like You' from the 'Anger Management' EP now: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/UQeio-aTfoM/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/UQeio-aTfoM/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/UQeio-aTfoM/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "BloodyCivilianVEVO",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-13T17:00:16Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "h3N8lmho6aPC2kyBOYbdX15HIOk",
      "id": {
          "kind": "youtube#video",
          "videoId": "dZQ8Y-to83Y"
      },
      "snippet": {
          "publishedAt": "2023-06-09T11:00:28Z",
          "channelId": "UCgNwFvc3G1IgjPstZKqLKTw",
          "title": "Bloody Civilian - Mad Apology (Official Video)",
          "description": "Bloody Civilian - Mad Apology (Official Video) Listen to 'Mad Apology' from the 'Anger Management' EP now: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/dZQ8Y-to83Y/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/dZQ8Y-to83Y/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/dZQ8Y-to83Y/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "BLOODY CIVILIAN",
          "liveBroadcastContent": "none",
          "publishTime": "2023-06-09T11:00:28Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "19-XVeBSQN68abPe9qFdgFqWFig",
      "id": {
          "kind": "youtube#video",
          "videoId": "IgDjlXCOGkM"
      },
      "snippet": {
          "publishedAt": "2022-12-09T18:00:10Z",
          "channelId": "UCgNwFvc3G1IgjPstZKqLKTw",
          "title": "Bloody Civilian – How To Kill A Man (Official Video)",
          "description": "Bloody Civilian – How To Kill A Man (Official Video) Listen to 'How To Kill A Man': https://bloodycivilian.lnk.to/HTKAM Watch the ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/IgDjlXCOGkM/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/IgDjlXCOGkM/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/IgDjlXCOGkM/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "BLOODY CIVILIAN",
          "liveBroadcastContent": "none",
          "publishTime": "2022-12-09T18:00:10Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "5AHWCTTyiUNOq6ReDj2EjerDp8Q",
      "id": {
          "kind": "youtube#video",
          "videoId": "KMkp-G4bEJ0"
      },
      "snippet": {
          "publishedAt": "2024-05-14T14:00:06Z",
          "channelId": "UCgNwFvc3G1IgjPstZKqLKTw",
          "title": "Bloody Civilian -  Head Start",
          "description": "Listen to 'Head Start' now: https://bloodycivilian.lnk.to/headstart Follow Bloody Civilian Twitter: https://twitter.com/bloody__civ ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/KMkp-G4bEJ0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/KMkp-G4bEJ0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/KMkp-G4bEJ0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "BLOODY CIVILIAN",
          "liveBroadcastContent": "none",
          "publishTime": "2024-05-14T14:00:06Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "cPeRa_3gmk3fjSHSzcTZIiMZSOg",
      "id": {
          "kind": "youtube#video",
          "videoId": "hwzMvQqv7Jw"
      },
      "snippet": {
          "publishedAt": "2024-05-10T08:31:24Z",
          "channelId": "UC7bpaveVg2UXI3c55r_wB3w",
          "title": "Seyi Vibez - WhatsApp ft Bloody Civilian (Official Video)",
          "description": "",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/hwzMvQqv7Jw/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/hwzMvQqv7Jw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/hwzMvQqv7Jw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Seyi Vibez fast topic",
          "liveBroadcastContent": "none",
          "publishTime": "2024-05-10T08:31:24Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "fi85KU155HiDFsXhc7Hu1kezw2w",
      "id": {
          "kind": "youtube#video",
          "videoId": "iXZ1NVI2nNU"
      },
      "snippet": {
          "publishedAt": "2024-06-07T00:00:06Z",
          "channelId": "UCyuu4R8ovortNbWMEs7YHeA",
          "title": "Bella Shmurda, Bloody Civilian - 1999 (Official Video)",
          "description": "\"1999\" off the R2 Sept 12 EP carries and speaks the spirit of perseverance. Bella Shmurda and Bloody Civilian trade verses ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/iXZ1NVI2nNU/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/iXZ1NVI2nNU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/iXZ1NVI2nNU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "BellashmurdaVEVO",
          "liveBroadcastContent": "none",
          "publishTime": "2024-06-07T00:00:06Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "cRwdYsXzvSoyXmd3fNakLjlelDo",
      "id": {
          "kind": "youtube#video",
          "videoId": "2B6rk0wVzx4"
      },
      "snippet": {
          "publishedAt": "2024-05-11T20:03:29Z",
          "channelId": "UCiJ6rYk4PETyItNH0vsLrew",
          "title": "Seyi Vibez - Whatsapp ft Bl0ody Civilian (Visualizer Video)",
          "description": "seyi vibez whatsapp video, seyi vibez ft bloody Civilian, #seyivibez #bloodycivilian, seyi vibez, seyi vibez ft odumodu blvck, seyi ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/2B6rk0wVzx4/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/2B6rk0wVzx4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/2B6rk0wVzx4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "ZinoBro",
          "liveBroadcastContent": "none",
          "publishTime": "2024-05-11T20:03:29Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "eH2bsY9TDe1_TaK7fzbKC5WD3b4",
      "id": {
          "kind": "youtube#video",
          "videoId": "olhYluELSEI"
      },
      "snippet": {
          "publishedAt": "2024-10-20T23:00:06Z",
          "channelId": "UCyWYl7zuQ_Ij2n7BMm_fMSg",
          "title": "Slow Afrobeat instrumental type beat &quot;Best Dancer&quot; 2024 | Wande coal ft Mannywellz",
          "description": "NOTE! The (Bloody Civilian) vocal sample on this beat has not been cleared Cleared. Beat title: BEST DANCER Producer: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/olhYluELSEI/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/olhYluELSEI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/olhYluELSEI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Mykkel Otteh",
          "liveBroadcastContent": "none",
          "publishTime": "2024-10-20T23:00:06Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "eHLOeyuzMVvEx8JC0QV24GzWwgE",
      "id": {
          "kind": "youtube#video",
          "videoId": "9vQiY8ox9u4"
      },
      "snippet": {
          "publishedAt": "2024-07-26T19:27:59Z",
          "channelId": "UCBGNQoTVs8H-4KKIoJR_JEA",
          "title": "Pabrymo - Popular Demand (Official Video) ft. Bloody Civilian",
          "description": "Pabrymo presents the official video to Popular Demand featuring Bloody Civilian. Available to stream / download: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/9vQiY8ox9u4/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/9vQiY8ox9u4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/9vQiY8ox9u4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "PaBrymoVEVO",
          "liveBroadcastContent": "none",
          "publishTime": "2024-07-26T19:27:59Z"
      }
  }
]

  const youtubeVlogDataResponse =  [
    {
      "kind": "youtube#searchResult",
      "etag": "VFQHEg2KBUOkG_hdxtJS1RYzl4w",
      "id": {
        "kind": "youtube#video",
        "videoId": "muLFOHbyGxs"
      },
      "snippet": {
        "publishedAt": "2023-12-28T20:57:32Z",
        "channelId": "UCgNwFvc3G1IgjPstZKqLKTw",
        "title": "A DAY IN THE LIFE OF THE BEST SISTER EVER",
        "description": "I pulled off a massive surprise on my brother by bringing my other brother, @cruelsantino, to his prom to perform for free, officially ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/muLFOHbyGxs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/muLFOHbyGxs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/muLFOHbyGxs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "BLOODY CIVILIAN",
        "liveBroadcastContent": "none",
        "publishTime": "2023-12-28T20:57:32Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "V11YmWjq8kunkKXer0nJCWiwlbs",
      "id": {
        "kind": "youtube#video",
        "videoId": "qeIbWKb83co"
      },
      "snippet": {
        "publishedAt": "2024-06-30T17:00:07Z",
        "channelId": "UCTDWudF27IXjp-JJR1n_v9Q",
        "title": "THE SLEEPOVER FT BLOODY CIVILIAN, GENOVEVA UMEH &amp; FAVE",
        "description": "I invited Genoveva, Bloody & Fave to have a sleepover with me & it was vibes with a sprinkle of chaos! I love love love these ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/qeIbWKb83co/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/qeIbWKb83co/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/qeIbWKb83co/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Susan Pwajok Tv",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-30T17:00:07Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "G53fGJnP6RTF23CiJJQL-Q5yYHk",
      "id": {
        "kind": "youtube#video",
        "videoId": "SP1kGw6ISsI"
      },
      "snippet": {
        "publishedAt": "2022-11-06T13:14:56Z",
        "channelId": "UCgNwFvc3G1IgjPstZKqLKTw",
        "title": "Getting my hair done at the moment. Preparing for BP!",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/SP1kGw6ISsI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/SP1kGw6ISsI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/SP1kGw6ISsI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "BLOODY CIVILIAN",
        "liveBroadcastContent": "none",
        "publishTime": "2022-11-06T13:14:56Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "vEqMdMkwhtjTvN6Kz90k4yOsxqg",
      "id": {
        "kind": "youtube#video",
        "videoId": "hUOT9Vph_tc"
      },
      "snippet": {
        "publishedAt": "2023-11-11T18:44:02Z",
        "channelId": "UCgNwFvc3G1IgjPstZKqLKTw",
        "title": "Story of how I entered Lagos.🙊 tag a problem child.",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hUOT9Vph_tc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/hUOT9Vph_tc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/hUOT9Vph_tc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "BLOODY CIVILIAN",
        "liveBroadcastContent": "none",
        "publishTime": "2023-11-11T18:44:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "8wJwv14viHBE1FBDTXaPzgLZOqI",
      "id": {
        "kind": "youtube#video",
        "videoId": "4UTSoKegv5w"
      },
      "snippet": {
        "publishedAt": "2022-10-10T15:35:38Z",
        "channelId": "UCgNwFvc3G1IgjPstZKqLKTw",
        "title": "setting up my new home❤️",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4UTSoKegv5w/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4UTSoKegv5w/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4UTSoKegv5w/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "BLOODY CIVILIAN",
        "liveBroadcastContent": "none",
        "publishTime": "2022-10-10T15:35:38Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "GQXHfbQ_m1_L9yDT4bWMsekUv_s",
      "id": {
        "kind": "youtube#video",
        "videoId": "pRePexxBR0M"
      },
      "snippet": {
        "publishedAt": "2022-10-05T18:43:24Z",
        "channelId": "UCgNwFvc3G1IgjPstZKqLKTw",
        "title": "Moved to Lagos ✈️✈️✈️",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/pRePexxBR0M/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/pRePexxBR0M/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/pRePexxBR0M/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "BLOODY CIVILIAN",
        "liveBroadcastContent": "none",
        "publishTime": "2022-10-05T18:43:24Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "5Pn_Vf9XoroUEDWmsitoxVWxYvA",
      "id": {
        "kind": "youtube#video",
        "videoId": "4pjl9-WcmmQ"
      },
      "snippet": {
        "publishedAt": "2023-06-14T20:00:53Z",
        "channelId": "UCQMzFsd23VfnHux1xtkQULA",
        "title": "Gen Next: EP5 | Bloody Civilian Wants To Conquer The World",
        "description": "On the season finale of the segment of t podcast Gen Next, our host sits with the beautiful singer, songwriter, record producer and ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4pjl9-WcmmQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4pjl9-WcmmQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4pjl9-WcmmQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Wonu Osikoya",
        "liveBroadcastContent": "none",
        "publishTime": "2023-06-14T20:00:53Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "3iEfAGYT_rxy3XYL6WI1QkXkStc",
      "id": {
        "kind": "youtube#video",
        "videoId": "gc2vW2tplps"
      },
      "snippet": {
        "publishedAt": "2022-11-07T07:49:40Z",
        "channelId": "UCgNwFvc3G1IgjPstZKqLKTw",
        "title": "Wakanda forever!❤️",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/gc2vW2tplps/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/gc2vW2tplps/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/gc2vW2tplps/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "BLOODY CIVILIAN",
        "liveBroadcastContent": "none",
        "publishTime": "2022-11-07T07:49:40Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "RTIC8JCJbeKJz52vLNGDQHYZnUY",
      "id": {
        "kind": "youtube#video",
        "videoId": "zZaLg9NjSMU"
      },
      "snippet": {
        "publishedAt": "2023-06-23T14:40:55Z",
        "channelId": "UCf6sEPr1ZKWNjOL0-XArk-w",
        "title": "Bloody Civilian - Mad Apology / Just Vibes Reaction",
        "description": "Just Vibes Family ❤️ Podcast Channel: @VivzandBanks Follow on: INSTAGRAM and TWITTER: @justvibes_vivz Patreon: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zZaLg9NjSMU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zZaLg9NjSMU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zZaLg9NjSMU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Just Vibes ",
        "liveBroadcastContent": "none",
        "publishTime": "2023-06-23T14:40:55Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "fPSYNSCwjTghXeCerv1wubd6Oh0",
      "id": {
        "kind": "youtube#video",
        "videoId": "2j1KUkuS3qU"
      },
      "snippet": {
        "publishedAt": "2023-07-21T13:00:01Z",
        "channelId": "UCwc8EkUUHuSxQAA8Fr8qO2g",
        "title": "Trace Mint with Bloody Civilian - #TraceMint",
        "description": "Connect with us today on our social media platforms; http://www.instagram.com/tracenaija http://www.facebook.com/tracenaija325 ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2j1KUkuS3qU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2j1KUkuS3qU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2j1KUkuS3qU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "TRACENAIJA",
        "liveBroadcastContent": "none",
        "publishTime": "2023-07-21T13:00:01Z"
      }
    }
  ]


export const fetchYouTubeMusicData = async () => {
  // try {
      // const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      //   params: {
      //     part: 'snippet',
      //     q: 'bloody civilian music videos',
      //     maxResults: 10,
      //     key: API_KEY,
      //     type: 'video'
      //   },
      // });
      // console.log(response)


    //   return response.data.items
    return youtubeMusicDataResponse
  // } catch (error) {
  //   console.log('Error fetching YouTube data:', error);
  //   return ['apple'];
  // }
};

export const fetchYoutubeVlogData = async () => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: 'bloody civilian vlogs and live videos ',
        maxResults: 10,
        key: API_KEY,
        type: 'video'
      },
    });
    return response.data.items
    // return response.data.items;
  } catch (error) {
    console.log('Error fetching YouTube data:', error);
    return [];
  }
}

