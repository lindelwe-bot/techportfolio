import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(10, 10, 10, 0.95));
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
    z-index: 1;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
`;

export const TitleUnderline = styled.div`
  width: 8rem;
  height: 0.25rem;
  background: linear-gradient(to right, var(--primary-color), transparent);
  margin: 0 auto;
  border-radius: 9999px;
  box-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const LeftSection = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 60%;
    display: flex;
    gap: 2rem;
  }
`;

export const ImageCard = styled(motion.div)`
  width: 100%;
  perspective: 1000px;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ImageWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.1);
  border: 1px solid rgba(0, 255, 157, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 1rem;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

export const StatsCard = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.1);
  border: 1px solid rgba(0, 255, 157, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const StatsTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  overflow: hidden;
`;

export const StatItem = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background: rgba(0, 255, 157, 0.1);
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 255, 157, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
  max-width: 100%;

  &:hover {
    background: rgba(0, 255, 157, 0.15);
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 255, 157, 0.2);
  }
`;

export const StatIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: ${props => props.bgColor || 'rgba(0, 255, 157, 0.2)'};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
  box-shadow: 0 0 10px rgba(0, 255, 157, 0.2);
`;

export const StatNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
`;

export const StatContent = styled.div`
  text-align: left;
  overflow: hidden;
  flex: 1;
`;

export const StatTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RightSection = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const JourneyCard = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.1);
  border: 1px solid rgba(0, 255, 157, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const JourneyTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
`;

export const JourneyText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  overflow: hidden;
`;

export const SkillTag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 157, 0.1);
  color: var(--primary-color);
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(0, 255, 157, 0.2);
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  &:hover {
    background: rgba(0, 255, 157, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 0 10px rgba(0, 255, 157, 0.2);
  }
`;

export const ReviewsSection = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

export const ReviewsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
`;

export const ReviewsContainer = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ReviewCard = styled(motion.div)`
  min-width: 300px;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.1);
  border: 1px solid rgba(0, 255, 157, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ReviewerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(0, 255, 157, 0.3);
`;

export const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewerName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0;
`;

export const ReviewerTitle = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

export const ReviewText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
`;

export const ReviewRating = styled.div`
  display: flex;
  gap: 0.25rem;
  color: #ffd700;
  font-size: 1.2rem;
`;