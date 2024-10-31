import type { NextPage } from "next";
import styles from "./index.module.css";
import NewComponent1 from '../components/NewComponent1'; // ajuste o caminho conforme necessário
import NewComponent2 from '../components/NewComponent2'; // ajuste o caminho conforme necessário
// Adicione mais importações de componentes conforme necessário

const Fleetsummary: NextPage = () => {
  return (
    <div className={styles.fleetsummary}>
      <img className={styles.fleetsummaryChild} alt="" src="/rectangle-1.svg" />
      <header className={styles.contactInfo}>
        <div id="Home" className={styles.carlin}>
          <h1 className={styles.carlosdev}>Carlos.dev</h1>
        </div>
      </header>
      <main className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.additionalData}>
            <div className={styles.notificationIconAreaParent}>
              <div className={styles.notificationIconArea}>
                <div className={styles.userSettings}>
                  <div className={styles.userSettings1}>
                    <h1 className={styles.softwareEngineer}>Software engineer</h1>
                    <div className={styles.serviceLinkIcon}>
                      <h1 className={styles.h1}>👋</h1>
                    </div>
                  </div>
                  <div className={styles.notificationCountArea}>
                    <div className={styles.sidebarItems}>
                      <b className={styles.hiImCarlos}>
                        Oi. Meu nome é Carlos Augusto. Um apaixonado por programação e Tecnologia. Atualmente morando em Criciúma, Brasil📍
                      </b>
                      <div className={styles.serviceLinks}>
                        <div className={styles.div}>ㅤ</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.image1Parent}>
                    <a href="https://www.linkedin.com/in/carlosaugustodev/">
                      <img
                        className={styles.image1Icon}
                        loading="lazy"
                        alt="linkedin"
                        src="/image-1@2x.png"
                      />
                    </a>
                    <a href="https://github.com/CarlosSchefferr">
                      <img
                        className={styles.image2Icon}
                        loading="lazy"
                        alt="github"
                        src="/image-2@2x.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <img
                className={styles.image12Icon}
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
            </div>
          </div>
          <div className={styles.techStackContent}>
            <NewComponent1 /> {/* Novo componente adicionado */}
            <NewComponent2 /> {/* Outro componente adicionado */}
            {/* Adicione mais componentes conforme necessário */}
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-2@2x.png"
            />
            <div className={styles.reportDataTableWrapper}>
              <div className={styles.reportDataTable}>
                <div className={styles.reportDataTableInner}>
                  <div className={styles.frameGroup}>
                    <div className={styles.aboutMeWrapper}>
                      <div className={styles.aboutMe}>
                        <span>ABOUT ME</span>
                        <span>{` `}</span>
                      </div>
                    </div>
                    <div className={styles.hiImCarlosAugustoAPassParent}>
                      <b className={styles.hiImCarlos1}>
                        Apaixonado por programação e tecnologia. Atualmente morando em Criciúma, Brasil📍
                      </b>
                      <div className={styles.wrapper}>
                        <div className={styles.div1}>ㅤ</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.hiImCarlos2}>
                  Desde pequeno sempre estive conectado com tecnologia e o mundo da internet. Isso sempre tem sido meu maior hobby. Hoje em dia sou um jovem estudante, atualmente cursando Engenharia de Software na UNISATC. Apaixonado por programação e com certas habilidades em HTML, CSS, Laravel/PHP, MySQL, PostgreSQL, Bootstrap, Javascript, Typescript, React, NodeJS, Python, Java e Figma.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainContentArea}>
            <div className={styles.additionalDataHeading}>
              <div className={styles.portfolioVisitInnerWrapper}>
                <div className={styles.portfolioVisitInnermostWrap}>
                  <img
                    className={styles.capturaDeTela20240513232}
                    alt=""
                    src="/captura-de-tela-20240513-232255-1@2x.png"
                  />
                  <img
                    className={styles.image13Icon}
                    alt=""
                    src="/image-13@2x.png"
                  />
                </div>
              </div>
              <div className={styles.thankYouFor}>
                Thank you for your visit to my personal portfolio
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reportOptions}>
          <div className={styles.talkToMe}>{`TALK TO ME! `}</div>
          <div className={styles.contactWays}>CONTACT WAYS</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.dataRowsParent}>
                  <div className={styles.dataRows}>
                    <img
                      className={styles.icons8Whatsapp1}
                      loading="lazy"
                      alt=""
                      src="/icons8whatsapp-1@2x.png"
                    />
                    <div className={styles.specificVehicleFilter}>
                      <b className={styles.b}>+55 51 99004-1021</b>
                    </div>
                  </div>
                  <div className={styles.dataRows1}>
                    <img
                      className={styles.icons8NovaMensagem1}
                      loading="lazy"
                      alt=""
                      src="/icons8novamensagem-1@2x.png"
                    />
                    <div className={styles.dataColumns}>
                      <a
                        className={styles.caugustomagnusgmailcom}
                        href="mailto:c.augustomagnus@gmail.com"
                        target="_blank"
                      >
                        c.augustomagnus@gmail.com
                      </a>
                    </div>
                  </div>
                  <div id="Contact" className={styles.dataRows2}>
                    <img
                      className={styles.icons8LogoDiscord1}
                      loading="lazy"
                      alt=""
                      src="/icons8logodiscord-1@2x.png"
                    />
                    <div className={styles.carlosm5727Wrapper}>
                      <b className={styles.carlosm5727}>carloscheffer</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.copyright2024CarlosAugustWrapper}>
              <b className={styles.copyright2024}>
                Copyright © 2024 Carlos Augusto. All Rights Reserved.
              </b>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fleetsummary;
