/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  VKShareButton,
  VKIcon,
  OKShareButton,
  OKIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';
import css from './style.css';

function Share(props) {
  const { result } = props;
  const shareUrl = 'https://dixy.ru';
  const title = `Я прошел тест на dixy.ru, Я ${result}`;
  return (
    <div className="share">
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="shareButton"
      >
        <FacebookIcon size={50} round />
      </FacebookShareButton>

      <VKShareButton
        url={shareUrl}
        title={title}
        className="shareButton"
      >
        <VKIcon size={50} round />
      </VKShareButton>

      <OKShareButton
        url={shareUrl}
        title={title}
        className="shareButton"
      >
        <OKIcon size={50} round />
      </OKShareButton>

      <TelegramShareButton
        url={shareUrl}
        title={title}
        className="shareButton"
      >
        <TelegramIcon size={50} round />
      </TelegramShareButton>
    </div>

  );
}

export default Share;
