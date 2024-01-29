import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaFacebookF } from "react-icons/fa";

let Footer = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="wrapper flex justify-between w-3/5 h-24 p-6 rounded-md mt-12 bg-slate-200 ">
          <div className="grid">
            <div>
              <h3 className="text-lg">Ready to get Started?</h3>
              <h3 className="text-lg">Talk to us today</h3>
            </div>
          </div>
          <div>
            <button className="bg-blue-700 text-white rounded-lg py-4 px-8 border-none transition-all duration-300 ease-in hover:bg-blue-300 transform scale-96">
              <NavLink to="/contact"> GET STARTED</NavLink>
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-sky-950">
        <div className="container grid grid-cols-4 gap-10 py-14 px-40 text-lg text-white relative">
          <div className="footer about grid gap-2">
            <h3>DigitalEra</h3>
            <p>
              Embark on a tech-savvy adventure with DigitalEra.Your journey into
              the world of electronics begins here.
            </p>
          </div>

          <div className="footer-sub grid gap-4">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                className="mb-4 text-base h-10 p-2"
                type="email"
                placeholder="Your E-mail"
                autoComplete="off"
              ></input>
              <input
                className="bg-blue-700 text-white rounded-lg py-3 px-6 border-none transition-all duration-300 ease-in hover:bg-blue-300 transform scale-96"
                type="submit"
                value="SUBSCRIBE"
              ></input>
            </form>
          </div>

          <div className="footer-social flex flex-col gap-4">
            <h3>Follow Us</h3>
            <div className="flex gap-4">
              <div className="text-3xl">
                <FaDiscord />
              </div>
              <div className="text-3xl">
                <FaInstagram />
              </div>
              <div className="text-2xl">
                <FaFacebookF />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Call Us</h3>
            <a href="tel:1234567890">+91 1234567890</a>
          </div>
        </div>

        <div className="pb-16">
          <hr />
          <div className="container grid grid-cols-2 justify-center items-center pt-5 pb">
            <p className="pt-4 text-white flex justify-self-center text-lg">
              @{new Date().getFullYear()} DigitalEra. All Right Reserved
            </p>
            <div className="text-white grid justify-self-center self-center">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
