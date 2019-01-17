import React from 'react'
import Link from 'gatsby-link'
import { GreyHeader } from '../components/headers'
import {
  FeatureText,
  WordsFeature,
  FeatureRightSlide,
} from '../components/content'
import { CTAGradient } from '../components/cta'

const data = [
  {
    title: 'Marketing Support',
    text:
      'Push brand awareness through traditional & new media marketing for maximum impact',
  },
  {
    title: 'Product Supply',
    text:
      'Provide proprietary ingredients that are soley sourced by the company to uphold authenticity and quality of the products',
  },
  {
    title: 'Continuous Product Development',
    text:
      'Innovate fun, unique, and exciting dessert creations to maintain a strong line of products our customers will love and enjoy',
  },
  {
    title: 'Training & Field Support',
    text:
      'Provide an overall operations training course: Product Making, Inventory, Purchasing, Food Handling & Customer Service',
  },
]

const content = {
  title: 'Words From the Team',
  lead:
    'At The Lost Bread, we do things differently. Our unique brand identity is what makes us an exceptional company. The Dedication ofevery member of the team, from crafting an experience to providing personal customer service, is natural because we simply love what we do',
  content:
    'If you are the type of person who believes in the unconventional and is ready for a challenge, then we are excited to have you on board. We hope that you find your own load bread and we look forward to doing business with you.',
}

const FranchisePage = () => (
  <div>
    <GreyHeader
      title="Franchising"
      subtitle="Start your sweet pursuit for success"
    />
    <WordsFeature />

    <CTAGradient />
  </div>
)

export default FranchisePage
