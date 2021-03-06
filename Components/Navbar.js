import React from 'react';
import {FaHeadset} from 'react-icons/fa';
import arrayanIcon from '../Assets/Icons/arrayanIcon.svg';
import getComponentWidth from '../componentHelpers/getComponentWidth';
import callCenter from '../Assets/Icons/Call_Center.svg';

export default function Navbar({
  open = false,
  visTopHeader = false,
  cpNumber = '021-2250-4920',
  setOpen = () => {},
}) {
  const ref1 = React.useRef(null);
  const [w1, hRef1] = getComponentWidth(ref1);
  const ref2 = React.useRef(null);
  const [w2, hRef2] = getComponentWidth(ref2);
  return (
    <div className="navbar-ar-cont">
      <div
        ref={ref1}
        className={`navbar-ar text-light ${
          visTopHeader || open ? '' : 'change-bg shadow'
        } ${open ? 'close' : ''}`}
      >
        <div className="container h-100 d-flex align-items-center justify-content-between">
          <div className="navbar-left container d-flex w-83 position-relative">
            <div
              className="logo"
              style={{
                height: `1.5em`,
                width: `calc(1.5em * 4.51)`,
              }}
            >
              <img src={arrayanIcon} alt="icon-arrayan" />
            </div>
            <div className="contact">
              <a
                ref={ref2}
                // style={{aspectRatio: 4.51, width: `${hRef2 * 4.51}px`}}
                className="contact-button text-decoration-none text-white"
                href={`tel:${cpNumber}`}
              >
                <img src={callCenter} alt="call-center-arrayan" />
                {/* <div className="text-small">
                  <text>
                    <span>
                      <FaHeadset />
                    </span>{' '}
                    call centre
                  </text>
                </div>
                {cpNumber} */}
              </a>
            </div>
          </div>
          <div
            className={`w-17 d-flex justify-content-right position-relative ${
              open ? 'open' : ''
            }`}
          >
            <button
              onClick={() => {
                setOpen((x) => !x);
              }}
              type="button"
              name="open-menu-btn"
              className={`menu-toggle ${visTopHeader ? '' : 'change-color'}`}
            >
              &nbsp;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
