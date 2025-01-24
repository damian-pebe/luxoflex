"use client";
import Divider, { DividerNoSpacing } from "@/components/divider";
import "./Contactanos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FocusCardsDemo from "./components/focusCards";
import ContactTitles from "./components/contactTitles";
import FormContact from "./components/FormContact";
import { PinContainer } from "@/components/ui/3d-pin";
import facebook from "@/assets/facebook.png";
import whatsapp from "@/assets/whatsapp.webp";
import instagram from "@/assets/instagram.webp";
import email from "@/assets/email.png";
// import ceo1 from "@/assets/rb_174457.png";
import ceo2 from "@/assets/rb_176267.png";
import { Mail, Phone } from "lucide-react";
import { Popover } from "antd";
import styled from "styled-components";
import Socials from "./components/Socials";

export default function Contactanos() {
  return (
    <div className=" bg-gradient-to-b from-black via-gray-950 to-black p-6 rounded-lg shadow-lg">
      <Divider />
      <ContactTitles />
      <h2 className="pt-10 justify-center flex items-center scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight first:mt-0">
        ¿Buscas etiquetas autoadheribles para tus productos? ¡Déjanos tus datos
        y te contactaremos de inmediato!
      </h2>
      <div className="group justify-evenly flex flex-col md:flex-row gap-20 ">
        <div className="md:w-[30%]">
          <FormContact />
        </div>

        <div className="md:hidden block">
          <DividerNoSpacing />
        </div>
        <div className="group-hover:flex-1  transition-all duration-1000">
          <h3 className="py-16 justify-center flex items-center scroll-m-20 text-4xl font-extralight font-zilla">
            Nuestras redes sociales
          </h3>
          <AnimatedPinDemo />
          <div className="py-16 flex justify-center w-full ">
            <Socials />
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <DividerNoSpacing />
      </div>
      <ContactData />
      <Divider />
      <FocusCardsDemo />

      <Divider />
    </div>
  );
}

function AnimatedPinDemo() {
  return (
    <div>
      <div className="">
        <div className=" grid md:grid-cols-5 grid-cols-2 gap-10 justify-center ">
          <PinContainer
            title="/luxoflex.vercel.app"
            href="luxoflex.vercel.app"
            className="flex-grow"
          >
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem] ">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla  text-base text-slate-100">
                Email
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500  text-sm">
                  LUXOFLEX tiene contacto por medio de Email asdasdasd
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-2 bg-gradient-to-br from-white via-gray-300 to-white">
                <img className="rounded-t-lg p-2" src={email} />
              </div>
            </div>
          </PinContainer>
          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem] ">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla  text-base text-slate-100">
                Llamadas
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500  text-sm">
                  LUXOFLEX tiene contacto por medio de telefono celular
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-2 bg-gradient-to-br from-white via-gray-300 to-white">
                {/* <img className="rounded-t-lg p-2" src={phone} /> */}
                <Phone className="rounded-t-lg p-2 w-full h-full text-black" />
              </div>
            </div>
          </PinContainer>
          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem] ">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla  text-base text-slate-100">
                WhatsApp
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500  text-sm">
                  LUXOFLEX tiene contacto por medio de WhatsApp
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-2 bg-gradient-to-br from-white via-gray-300 to-white">
                <img className="rounded-t-lg" src={whatsapp} />
              </div>
            </div>
          </PinContainer>
          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem] ">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla  text-base text-slate-100">
                Facebook
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500  text-sm">
                  LUXOFLEX tiene contacto por medio de Facebook
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-2 bg-gradient-to-br from-white via-gray-300 to-white">
                <img className="rounded-t-lg p-2" src={facebook} />
              </div>
            </div>
          </PinContainer>
          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem] ">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla  text-base text-slate-100">
                Instagram
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500  text-sm">
                  LUXOFLEX tiene contacto por medio de Instagram
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-2 bg-gradient-to-br from-white via-gray-300 to-white">
                <img className="rounded-t-lg p-2" src={instagram} />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}

function ContactData() {
  return (
    <div>
      <a
        className="font-extrabold font-flamenco text-4xl  justify-center flex items-center pt-10 pb-5"
        href="https://luxoflex.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        CONTACTANOS PERSONALMENTE
      </a>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center pl-10 md:pl-28 lg:pl-14 jusify-cetnter gap-6 ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="mail">
          <Popover content="Enviar email">
            <Mail
              onClick={() =>
                (window.location.href = "mailto:luxoflex@gmail.com")
              }
              className="hover:cursor-pointer transition-colors duration-1000 text-pink-300 hover:text-pink-800"
            />
          </Popover>
        </div>
        <div className="profile-pic">
          <img
            className=" w-full h-full object-top transition-all duration-500 hover:scale-150 hover:object-top"
            src={ceo2}
          />
        </div>
        <div className="bottom">
          <div className="content">
            <span className="name font-audiowide">My Name</span>
            <div className=" font-playfair text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicinFcls{" "}
            </div>
          </div>
          <div className="bottom-bottom">
            <div className="social-links-container">
              <Popover content="Llamar">
                <i
                  onClick={() => (window.location.href = "tel:+523334626001")}
                  className="hover:cursor-pointer bi bi-telephone-outbound text-lg  transition-all duration-1000 text-white hover:text-pink-800 hover:scale-150"
                ></i>
              </Popover>

              <Popover content="WhatsApp">
                <i
                  onClick={() =>
                    (window.location.href = "https://wa.me/+523334626001")
                  }
                  className="hover:cursor-pointer bi bi-whatsapp text-lg  transition-all duration-1000 text-white hover:text-pink-800 hover:scale-150"
                ></i>
              </Popover>

              <Popover content="Facebook">
                <i
                  onClick={() =>
                    (window.location.href = "https://facebook.com/luxoflex")
                  }
                  className="hover:cursor-pointer bi bi-facebook text-lg  transition-all duration-1000 text-white hover:text-pink-800 hover:scale-150"
                ></i>
              </Popover>

              <Popover content="Instagram">
                <i
                  onClick={() =>
                    (window.location.href = "https://instagram.com/luxoflex")
                  }
                  className="hover:cursor-pointer bi bi-instagram text-lg  transition-all duration-1000 text-white hover:text-pink-800 hover:scale-150"
                ></i>
              </Popover>
            </div>
            <button
              className="button font-playfair font-bold transition-colors duration-1000"
              onClick={() => (window.location.href = "tel:+523334626001")}
            >
              Contactame
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 280px;
    height: 280px;
    background: white;
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: #604b4a30 0px 70px 30px -50px;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .card .mail {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    background: transparent;
    border: none;
  }

  .card .mail img {
    stroke: #fbb9b6;
    stroke-width: 3px;
  }

  .card .mail img:hover {
    stroke: #f55d56;
  }

  .card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    border: 0px solid #fbb9b6;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  .card .profile-pic img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    transition: all 0.5s ease-in-out;
  }

  .card:hover .profile-pic {
    width: 100px;
    height: 100px;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    z-index: 3;
    border: 7px solid #fbb9b6;
    box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px;
  }

  .card:hover .profile-pic img {
    object-fit: cover;
    object-position: top;
    height: 300%;
    width: 100%;
  }

  .card .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: #fbb9b6;
    top: 80%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  .card .bottom .content {
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 160px;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: 0.9rem;
    color: white;
    margin-top: 1rem;
  }

  .card .bottom .bottom-bottom {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card .bottom .bottom-bottom .social-links-container {
    display: flex;
    gap: 1rem;
  }

  .card .bottom .bottom-bottom .social-links-container img {
    height: 20px;
    fill: white;
    filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.1333333333));
  }

  .card .bottom .bottom-bottom .social-links-container img:hover {
    fill: #f55d56;
    transform: scale(1.2);
  }

  .card .bottom .bottom-bottom .button {
    background: white;
    color: #fbb9b6;
    border: none;
    border-radius: 20px;
    font-size: 0.6rem;
    padding: 0.4rem 0.6rem;
    box-shadow: rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;
  }

  .card .bottom .bottom-bottom .button:hover {
    background: #f55d56;
    color: white;
  }

  .card:hover {
    border-top-left-radius: 55px;
  }

  .card:hover .bottom {
    top: 20%;
    border-radius: 80px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  }

  .profile-pic {
    overflow: hidden;
  }
`;
