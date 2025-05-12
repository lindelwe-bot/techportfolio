import React from 'react';
import { motion } from 'framer-motion';
import {
  ReviewsSection,
  ReviewsTitle,
  ReviewsContainer,
  ReviewCard,
  ReviewHeader,
  ReviewerImage,
  ReviewerInfo,
  ReviewerName,
  ReviewerTitle,
  ReviewText,
  ReviewRating
} from './About.styles';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Tonderai Kawere",
      title: "CEO, TechStart Inc.",
      image: "/images/reviewers/sarah.jpg",
      text: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional. The project was delivered on time and exceeded our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CTO, InnovateX",
      image: "/images/reviewers/michael.jpg",
      text: "A true professional with deep technical expertise. They transformed our vision into a reality, creating a robust and scalable solution that has significantly improved our operations.",
      rating: 5
    },
    {
      id: 3,
      name: "",
      title: "Product Manager, Digital Solutions",
      image: "/images/reviewers/emily.jpg",
      text: "The developer's ability to understand complex requirements and deliver high-quality code is impressive. Their communication skills and collaborative approach made the project a success.",
      rating: 5
    }
  ];

  return (
    <ReviewsSection>
      <ReviewsTitle>Client Reviews</ReviewsTitle>
      <ReviewsContainer>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ReviewHeader>
              <ReviewerImage
                src={process.env.PUBLIC_URL + review.image}
                alt={review.name}
              />
              <ReviewerInfo>
                <ReviewerName>{review.name}</ReviewerName>
                <ReviewerTitle>{review.title}</ReviewerTitle>
              </ReviewerInfo>
            </ReviewHeader>
            <ReviewText>{review.text}</ReviewText>
            <ReviewRating>
              {[...Array(review.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </ReviewRating>
          </ReviewCard>
        ))}
      </ReviewsContainer>
    </ReviewsSection>
  );
};

export default Reviews;