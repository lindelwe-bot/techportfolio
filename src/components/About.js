import React from 'react';
import { motion } from 'framer-motion';
import {
  AboutSection,
  Container,
  TitleWrapper,
  Title,
  TitleUnderline,
  ContentWrapper,
  LeftSection,
  ImageCard,
  ImageWrapper,
  ImageContainer,
  ProfileImage,
  StatsCard,
  StatsTitle,
  StatsGrid,
  StatItem,
  StatIcon,
  StatNumber,
  StatContent,
  StatTitle,
  StatDescription,
  RightSection,
  JourneyCard,
  JourneyTitle,
  JourneyText,
  SkillsContainer,
  SkillTag
} from './About.styles';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TitleWrapper>
            <Title>About Me</Title>
            <TitleUnderline />
          </TitleWrapper>
          
          <ContentWrapper>
            <LeftSection>
              <ImageCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWrapper>
                  <ImageContainer>
                    <ProfileImage
                      src={process.env.PUBLIC_URL + "/images/lsn2.png"}
                      alt="Profile"
                    />
                  </ImageContainer>
                </ImageWrapper>
              </ImageCard>

              <StatsCard>
                <StatsTitle>Key Achievements</StatsTitle>
                <StatsGrid>
                  <StatItem
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <StatIcon bgColor="rgba(0, 255, 157, 0.2)">
                      <StatNumber>2+</StatNumber>
                    </StatIcon>
                    <StatContent>
                      <StatTitle>Years Experience</StatTitle>
                      <StatDescription>Professional Development</StatDescription>
                    </StatContent>
                  </StatItem>
                  <StatItem
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <StatIcon bgColor="rgba(0, 255, 157, 0.2)">
                      <StatNumber>20+</StatNumber>
                    </StatIcon>
                    <StatContent>
                      <StatTitle>Projects Completed</StatTitle>
                      <StatDescription>Successful Deliveries</StatDescription>
                    </StatContent>
                  </StatItem>
                  <StatItem
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <StatIcon bgColor="rgba(0, 255, 157, 0.2)">
                      <StatNumber>15+</StatNumber>
                    </StatIcon>
                    <StatContent>
                      <StatTitle>Happy Clients</StatTitle>
                      <StatDescription>Satisfied Customers</StatDescription>
                    </StatContent>
                  </StatItem>
                </StatsGrid>
              </StatsCard>
            </LeftSection>

            <RightSection>
              <JourneyCard>
                <JourneyTitle>Professional Journey</JourneyTitle>
                <JourneyText>
                  I am a passionate full-stack developer with expertise in building modern web applications.
                  My journey in technology began with a curiosity about how things work, which led me to
                  explore various programming languages and frameworks.
                </JourneyText>
                <JourneyText>
                  I specialize in creating responsive, user-friendly applications that solve real-world problems.
                  With a strong foundation in both frontend and backend technologies, I bring a comprehensive
                  approach to every project I undertake.
                </JourneyText>
                <SkillsContainer>
                  <SkillTag>React</SkillTag>
                  <SkillTag>Node.js</SkillTag>
                  <SkillTag>MongoDB</SkillTag>
                  <SkillTag>JavaScript</SkillTag>
                  <SkillTag>HTML5</SkillTag>
                  <SkillTag>CSS3</SkillTag>
                </SkillsContainer>
              </JourneyCard>
            </RightSection>
          </ContentWrapper>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About; 