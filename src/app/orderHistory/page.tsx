import React from "react";
import { ArrowLeftMd } from "./ArrowLeftMd";
import { Check } from "./Check";
import { ChevronRight } from "./ChevronRight";
import { Nav } from "./Nav";
import "./style.css";

export default function UserProfileOrder(): JSX.Element {
  return <div className="user-profile-order">
      <div className="back">
        <div className="div">Back</div>
        <ArrowLeftMd className="arrow-arrow-left-MD" />
      </div>
      <div className="nav-wrapper">
        <Nav className="nav-instance" logoLogoClassName="design-component-instance-node" />
      </div>
      <div className="frame-2">
        <div className="text-wrapper-2">Order History</div>
        <div className="rectangle-2" />
        <div className="frame-3">
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-6">
                <div className="group">
                  <div className="text-wrapper-3">November 8, 2023</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Order No. 123456789</div>
                </div>
              </div>
              <div className="frame-7">
                <Check className="check-instance" />
                <div className="text-wrapper-5">Confirmed</div>
              </div>
              <div className="group-2">
                <div className="overlap-group">
                  <img
                    className="sandy-millar"
                    alt="Sandy millar"
                    src="sandy-millar-s5pfhdxuxyw-unsplash-removebg-preview-1.png"
                  />
                </div>
                <div className="rectangle-3" />
                <div className="rectangle-4" />
              </div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-6">View order</div>
              <ChevronRight className="arrow-chevron-right" />
            </div>
          </div>
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-6">
                <div className="group-3">
                  <div className="text-wrapper-7">October 10, 2023</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Order No. 123498765</div>
                </div>
              </div>
              <div className="frame-7">
                <Check className="check-instance" />
                <div className="text-wrapper-5">Ready for Pick Up</div>
              </div>
              <div className="group-2">
                <div className="overlap-group">
                  <img className="sandy-millar" alt="Sandy millar" src="image.png" />
                </div>
                <div className="rectangle-3" />
                <div className="rectangle-4" />
              </div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-6">View order</div>
              <ChevronRight className="arrow-chevron-right" />
            </div>
          </div>
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-6">
                <div className="group-4">
                  <div className="text-wrapper-7">September 8, 2023</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Order No. 123498765</div>
                </div>
              </div>
              <div className="frame-7">
                <Check className="check-instance" />
                <div className="text-wrapper-5">Ready for Pick Up</div>
              </div>
              <div className="group-2">
                <div className="overlap-group">
                  <img
                    className="sandy-millar"
                    alt="Sandy millar"
                    src="sandy-millar-s5pfhdxuxyw-unsplash-removebg-preview-1-2.png"
                  />
                </div>
                <div className="rectangle-3" />
                <div className="rectangle-4" />
              </div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-6">View order</div>
              <ChevronRight className="arrow-chevron-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
}
