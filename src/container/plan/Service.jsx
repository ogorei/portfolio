import React, { useEffect, useState } from 'react';
import './Service.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const plan= [
  {
    "userId": 1,
    "id": 1,
    "title": "トップページ＋お問い合わせページ＋他5ページまで（計7ページまで)"
  },
  {
    "userId": 2,
    "id": 2,
    "title": "サイトマップ設置",
  },
  {
    "userId": 3,
    "id": 3,
    "title": "お知らせ記事設置",
  },
  {
    "userId": 4,
    "id": 4,
    "title": "ブログ設置",
  },
  {
    "userId": 5,
    "id": 5,
    "title": "ナビメニュー設置",
  },
  {
    "userId": 6,
    "id": 6,
    "title": "Googleマップ設置",
  },
  {
    "userId": 7,
    "id": 7,
    "title": "動画埋め込み",
  },
  {
    "userId": 8,
    "id": 8,
    "title": "ロゴ画像制作＆設置",
  },
  {
    "userId": 9,
    "id": 9,
    "title": "ファビコン画像制作＆設置",
  },
  {
    "userId": 10,
    "id": 10,
    "title": "OGP画像制作＆設置",
  },
]
const base= [
  {
    "userId": 1,
        "title": "SEO内部施策"
  },
  {
    "userId": 2,
        "title": "SSL化",
  },
  {
    "userId": 3,
        "title": "セキュリティ対策",
  },
  {
    "userId": 4,
        "title": "エラー防止対策",
  },
  {
    "userId": 5,
        "title": "AMP対応",
  },
  {
    "userId": 6,
        "title": "完全レスポンシブ対応",
  },
  {
    "userId": 7,
        "title": "モバイルフレンドリー",
  },
  {
    "userId": 8,
        "title": "プラグイン選定・最適化",
  },
  {
    "userId": 9,
        "title": "各種設定の最適化",
  },
]

const Service = () => {
	const [service, setservice] = useState([]);
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	return (
    <>
      <h2 className="head-text">Service & <span>Price</span></h2>
        <div>
          <img className='plan_image' src="https://i.gyazo.com/66ac333dc02bc0eb1b68daa6b3343169.png" alt="" />
        </div>
      <div className='app__plan'>
        <div className='app__plan_container'>
          <h2 className='title'>制作ページ機能</h2>
          {
            plan.map((item, index) => {
              return(
                <ul className='app_list'>
                  <li>
                  {item.title}
                  </li>
                </ul>
              )
            })
          }

        </div>
        <div className='app__plan_container' >
          <h2 className='title'>サイト基盤</h2>
          {
            base.map((item, index) => {
              return(
                <ul className='app_list'>
                  <li>
                  {item.title}
                  </li>
                </ul>
              )
            })
          }
        </div>
        
      </div>

    </>
  );
};

export default AppWrap(Service, 'service','app__whitebg');
