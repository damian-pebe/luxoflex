import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const WhoWeAre = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Container>
      <BackgroundOverlay />
      
      <ContentWrapper ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Title>Quiénes Somos</Title>
        </motion.div>

        <GridContainer>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <VisionSection>
              <SectionTitle>Nuestra Visión</SectionTitle>
              <Text>
                Transformamos espacios en experiencias únicas, donde la luz y la elegancia 
                se encuentran para crear ambientes perfectos. Luxoflex representa la 
                excelencia en soluciones de cortinas y persianas personalizadas.
              </Text>
            </VisionSection>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ValueSection>
              <SectionTitle>Nuestros Valores</SectionTitle>
              <ValuesList>
                <ValueItem>
                  <ValueIcon>✨</ValueIcon>
                  <ValueText>Innovación Constante</ValueText>
                </ValueItem>
                <ValueItem>
                  <ValueIcon>🎯</ValueIcon>
                  <ValueText>Excelencia en Calidad</ValueText>
                </ValueItem>
                <ValueItem>
                  <ValueIcon>🤝</ValueIcon>
                  <ValueText>Compromiso Total</ValueText>
                </ValueItem>
              </ValuesList>
            </ValueSection>
          </motion.div>
        </GridContainer>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <ExperienceSection>
            <SectionTitle>Nuestra Experiencia</SectionTitle>
            <Text>
              Con más de X años en el mercado, hemos perfeccionado el arte de 
              transformar espacios. Cada proyecto es único y recibe nuestra 
              dedicación completa, desde el diseño inicial hasta la instalación final.
            </Text>
          </ExperienceSection>
        </motion.div>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  overflow: hidden;
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
  font-size: 4rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #f0f0f0;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const Text = styled.p`
  color: #d0d0d0;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const VisionSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueSection = styled(VisionSection)``;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ValueItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const ValueIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const ValueText = styled.span`
  color: #d0d0d0;
  font-size: 1.1rem;
`;

const ExperienceSection = styled(VisionSection)`
  margin-top: 3rem;
`;

export default WhoWeAre;
