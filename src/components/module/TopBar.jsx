import React from 'react'

export default function TopBar() {
  return (
            <div>
          <div className="master-up bg-[url('/img/hdup.jpg')] h-[45px] bg-cover ]"></div>
          <div className="master-center bg-[url('/img/hdmd.jpg')] h-[58px] bg-cover ]">
            <div
              style={{
                height: "27px",
                width: "740px",
                // paddingRight: "215px",
                paddingTop: "31px",
                textAlign: "right",
                direction: "rtl",
                color: "#FFFFFF",
                fontFamily: "'b yekan', sans-serif",
                fontSize: "1.1em",
                fontWeight: "bold",
              }}
            >
              <h2 className=" ">
                اعلام نتایج آزمون ورودی کارآموزی وکالت سال 1404(کانون وکلا
                دادگستری)
              </h2>
            </div>
          </div>
          <div className="master-down bg-[url('/img/hddn.jpg')] h-[22px] pt-[22px] bg-cover ]"></div>
        </div>
  )
}
