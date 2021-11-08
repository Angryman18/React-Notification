import styled from "styled-components";
import { createPortal } from "react-dom";
import React from "react";
import { useDispatch } from "react-redux";

const Notification = ({ text }) => {

  const dispatch = useDispatch();

  const closeNotification = () => {
    dispatch({ type: "visibelOff", message: text });
  };

  let Comp = () => {
    return (
      <NotificationComp>
          <Main>
            <Text>{text}</Text>
            <Icon onClick={closeNotification}>
              <i className="fas fa-times"></i>
            </Icon>
          </Main>
      </NotificationComp>
    );
  };

  React.useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "visibelOff", message: text });
      console.log("visible off");
    }, 4000);
  }, []);

  return <>{createPortal(<Comp />, document.getElementById("notification"))}</>;
};

export default Notification;

const NotificationComp = styled.div`
  padding: 10px;
  position: fixed;
  z-index: 99999999;
  background: transparent;
  right: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Main = styled.div`
  width: 300px;
  min-height: 35px;
  padding: 1rem 0;
  background-color: rgba(222, 60, 60, 1);
  color: #fff;
  z-index: 9999;
  border-radius: 10px;
  pointer-events: visible;
  padding: 5px 10px;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: visible 0.4s ease;

  @keyframes visible {
    0% {
      transform: translateY(40px);
      opacity: 0.1;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const MainDisapear = styled.div`
  width: 300px;
  min-height: 35px;
  background-color: rgba(222, 60, 60, 1);
  color: #fff;
  border-radius: 10px;
  pointer-events: visible;
  padding: 5px 10px;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: visible2 0.4s ease-in forwards;

  @keyframes visible2 {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(350px);
    }
  }
`;

const Text = styled.p`
  color: #fff;
  padding: 0;
  margin: 0;
  padding-right: 20px;
  text-align: justify;
  text-justify: inter-word;
`;
const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 1.2rem;
  transform: translate(0px, -50%);
  color: #fff;
  cursor: pointer;
`;
