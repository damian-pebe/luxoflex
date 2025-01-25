import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import background from "@/assets/background.jpg";
import innovationImg from "@/assets/background.jpg";
import experienceImg from "@/assets/background.jpg";
import { WobbleCardDemo } from './WobbleCard';

const WhoWeAre = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Container>
      <BackgroundOverlay />
      <ContentWrapper ref={ref}>
        {/* Full width title section */}
        <FullWidthSection>
          <Title className="font-monoton tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white animate-pulse">
            <TypeAnimation
              sequence={[
                'Quiénes Somos',
                1000,
                'Nuestra Historia',
                1000,
                'Luxoflex',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Title>
          <Text className="text-center max-w-3xl mx-auto font-exo tracking-wide text-lg text-white/80">
            En Luxoflex, transformamos ideas en realidades. Nuestra pasión por la innovación
            y el compromiso con la excelencia nos define en cada proyecto que emprendemos.
          </Text>
        </FullWidthSection>

        {/* Text + Image Grid */}
        <TextImageGrid>
          <ContentBlock>
            <SectionTitle>Innovación y Diseño</SectionTitle>
            <Text>
              Cada proyecto representa una oportunidad para crear soluciones 
              únicas que transforman espacios ordinarios en extraordinarios.
            </Text>
          </ContentBlock>
          <ImageContainer>
            <StyledImage src={innovationImg} alt="Innovación" />
          </ImageContainer>
        </TextImageGrid>

        {/* Three Column Text Section */}
        <ThreeColumnSection>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group"
          >
            <div className="hover:cursor-grab">
              <ValueCard
                title="Visión"
              description="Ser líderes en soluciones innovadoras y sostenibles, transformando la industria con excelencia y creatividad."
              icon={
                <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
            />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group"
          >            <div className="hover:cursor-grab">

            <ValueCard
              title="Misión"
              description="Transformar espacios con diseños únicos y funcionales, superando las expectativas de nuestros clientes."
              icon={
                <svg className="w-8 h-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="group"
          >            <div className="hover:cursor-grab">

            <ValueCard
              title="Valores"
              description="Excelencia, innovación y compromiso inquebrantable con la satisfacción de nuestros clientes."
              icon={
                <svg className="w-8 h-8 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />            </div>

          </motion.div>
        </ThreeColumnSection>

        {/* Full width image section */}
        <FullWidthImageSection className="hover:cursor-cell">
          <StyledImage 
            src={experienceImg}
            alt="Experiencia" 
            className="h-[50vh] md:h-[70vh] "
          />
          <OverlayText>
            <SectionTitle>Experiencia Comprobada</SectionTitle>
            <Text>
              Más de 1000 proyectos exitosos respaldan nuestra trayectoria
            </Text>
          </OverlayText>
        </FullWidthImageSection>
      </ContentWrapper>

      <WobbleCardDemo/>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 6rem 0;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.3) 100%);
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #ffffff;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;
  font-family: 'Monoton', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.1em;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #f0f0f0;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.05em;
`;

const Text = styled.p`
  color: #d0d0d0;
  line-height: 1.8;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  max-width: 65ch;
  font-family: 'Exo 2', sans-serif;
  letter-spacing: 0.02em;
`;

const TextImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  margin: 6rem 0;
  align-items: center;
  padding: 0 2rem;

  .card {
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease;
    }
  }

  .hover-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 0.7;
    animation: bounce 3s infinite ease-in-out;
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  .cursor-icon {
    width: 24px;
    height: 24px;
    transform: rotate(-20deg);
    animation: wiggle 1s infinite ease-in-out;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translate(-50%, -50%);
    }
    50% {
      transform: translate(-50%, -70%);
    }
  }

  @keyframes wiggle {
    0%, 100% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(-30deg);
    }
  }

  .card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);

    &::before {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  .card:hover .hover-indicator {
    opacity: 0;
    transition: all 0.3s ease;
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #e0e0e0;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #a0a0a0;
    line-height: 1.4;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentBlock = styled.div`
  direction: ltr;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.8) 100%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 10, 0.9) 100%);
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ImageContainer = ({  }: { children: React.ReactNode }) => (
  <div>
    <div className="card">
      <div className="hover-indicator">
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>Hover me</span>
        <svg 
          className="cursor-icon" 
          fill="white" 
          viewBox="0 0 24 24"
        >
          <path d="M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z" />
        </svg>
      </div>
      <div className="card__content">
        <p className="card__title">Innovación</p>
        <p className="card__description">Transformamos espacios con diseños únicos y funcionales, creando soluciones innovadoras que superan expectativas.</p>
      </div>
    </div>
  </div>
);

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const FullWidthSection = styled.div`
  width: 100%;
  margin: 4rem 0;
  padding: 0 2rem;
`;

const ThreeColumnSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 6rem 0;
  padding: 0 2rem;

  .card {
    overflow: visible;
    width: 100%;
    height: 254px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front, .back {
    background-color: #000000;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #000000;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    strong {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
    }
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
  }

  .description {
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 1.5rem;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: 'Playfair Display', serif;
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 1rem;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  `;

const ValueCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="card">
    <div className="content">
      <div className="back">
        <div className="back-content">
          {icon}
          <strong>{title}</strong>
        </div>
      </div>
      <div className="front">
        <div className="img">
          <div className="circle"></div>
          <div className="circle" id="right"></div>
          <div className="circle" id="bottom"></div>
        </div>
        <div className="front-content">
          <small className="badge">{title}</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>{title}</strong>
              </p>
            </div>
            <p className="card-footer">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FullWidthImageSection = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
  height: 70vh;
  overflow: hidden;
  border-radius: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.8),
      rgba(18, 18, 32, 0.9)
    );
    z-index: 1;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  z-index: 2;
  backdrop-filter: blur(3px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
  }

  ${SectionTitle} {
    color: #F0F8FF; // Alice Blue
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    font-family: 'Playfair Display', serif;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 150px;
      height: 3px;
      background: linear-gradient(90deg, transparent, #E6E6FA, transparent); // Lavender
    }
  }

  ${Text} {
    color: #F0FFFF; // Azure
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    font-size: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.95;
    position: relative;
    padding: 30px;
    line-height: 1.8;
    
    &::before, &::after {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      border: 2px solid rgba(230, 230, 250, 0.4); // Lavender with opacity
    }
    
    &::before {
      top: 0;
      left: 0;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: 0;
      right: 0;
      border-left: none;
      border-top: none;
    }
  }

  .values {
    display: flex;
    gap: 4rem;
    margin-top: 3rem;
    
    .value-item {
      text-align: center;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
      }
      
      .icon {
        font-size: 2.5rem;
        color: #E0FFFF; // Light Cyan
        margin-bottom: 1rem;
      }
      
      .label {
        font-size: 1.2rem;
        color: #F0F8FF; // Alice Blue
        font-family: 'Playfair Display', serif;
        margin-bottom: 0.5rem;
      }
      
      .description {
        font-size: 0.9rem;
        color: rgba(240, 248, 255, 0.8); // Alice Blue with opacity
        max-width: 200px;
      }
    }
  }
`;

export default WhoWeAre;
