import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import background from "@/assets/background.jpg";
import innovationImg from "@/assets/background.jpg";
import experienceImg from "@/assets/background.jpg";

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
            <ValueCard className="animate-flip2 hover:animate-glow" style={{ backgroundImage: `url(${background})` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-blue-600/30 to-black/50 group-hover:from-blue-400/60 group-hover:via-blue-500/40 group-hover:to-black/60 transition-all duration-500" />
              <CardContent className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-500/20 rounded-xl backdrop-blur-sm">
                      <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <SectionTitle className="text-white font-orbitron tracking-wider">Visión</SectionTitle>
                  </div>
                  <Text className="text-white/90 font-exo tracking-wide">
                    Ser líderes en soluciones innovadoras y sostenibles, transformando la industria con excelencia y creatividad.
                  </Text>
                </motion.div>
              </CardContent>
            </ValueCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group"
          >
            <ValueCard className="animate-flip2 hover:animate-glow" style={{ backgroundImage: `url(${background})` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-purple-600/30 to-black/50 group-hover:from-purple-400/60 group-hover:via-purple-500/40 group-hover:to-black/60 transition-all duration-500" />
              <CardContent className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-500/20 rounded-xl backdrop-blur-sm">
                      <svg className="w-8 h-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <SectionTitle className="text-white font-orbitron tracking-wider">Misión</SectionTitle>
                  </div>
                  <Text className="text-white/90 font-exo tracking-wide">
                    Transformar espacios con diseños únicos y funcionales, superando las expectativas de nuestros clientes.
                  </Text>
                </motion.div>
              </CardContent>
            </ValueCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="group"
          >
            <ValueCard className="animate-flip2 hover:animate-glow" style={{ backgroundImage: `url(${background})` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/50 via-emerald-600/30 to-black/50 group-hover:from-emerald-400/60 group-hover:via-emerald-500/40 group-hover:to-black/60 transition-all duration-500" />
              <CardContent className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-500/20 rounded-xl backdrop-blur-sm">
                      <svg className="w-8 h-8 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <SectionTitle className="text-white font-orbitron tracking-wider">Valores</SectionTitle>
                  </div>
                  <Text className="text-white/90 font-exo tracking-wide">
                    Excelencia, innovación y compromiso inquebrantable con la satisfacción de nuestros clientes.
                  </Text>
                </motion.div>
              </CardContent>
            </ValueCard>
          </motion.div>
        </ThreeColumnSection>

        {/* Full width image section */}
        <FullWidthImageSection>
          <StyledImage 
            src={experienceImg}
            alt="Experiencia" 
            className="h-[50vh] md:h-[70vh]"
          />
          <OverlayText>
            <SectionTitle>Experiencia Comprobada</SectionTitle>
            <Text>
              Más de 1000 proyectos exitosos respaldan nuestra trayectoria
            </Text>
          </OverlayText>
        </FullWidthImageSection>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 6rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
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
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
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

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentBlock = styled.div`
  direction: ltr;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  aspect-ratio: 16/9;
  width: 100%;
`;

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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthImageSection = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
  height: 70vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;

  ${SectionTitle}, ${Text} {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const ValueCard = styled.div`
  position: relative;
  min-height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default WhoWeAre;
