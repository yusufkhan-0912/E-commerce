import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

let Services = () => {
  return (
    <section className="py-9 px-40">
      <div className="conatiner">
        <div className="grid grid-cols-3 gap-16 ">
          <div className="flex flex-col justify-center items-center w-auto h-80 shadow-lg  bg-slate-200 rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <TbTruckDelivery className="w-20 h-12" />
              <h3 className="text-lg">Super Fast and Free Delivery</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-14 ">
            <div className="w-80 h-auto shadow-lg  bg-slate-200 rounded-lg p-6">
              <div className="flex flex-col items-center gap-3">
                <MdSecurity className="w-20 h-12" />
                <h3 className="text-lg">Non-Contact Shipping</h3>
              </div>
            </div>
            <div className="w-80 h-auto shadow-lg  bg-slate-200 rounded-lg p-6">
              <div className="flex flex-col items-center gap-3">
                <GiMoneyStack className="w-20 h-12" />
                <h3 className="text-lg">Money-back Guaranteed</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-auto h-80 shadow-lg  bg-slate-200 rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <RiSecurePaymentLine className="w-20 h-12" />
              <h3 className="text-lg">Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
