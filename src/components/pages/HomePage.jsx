import { TrendingList } from 'components/TrendingList/TrendingList';
import { DivContainer, Section } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Section>
      <DivContainer>
        <h2>Trending today:</h2>
        <TrendingList />
      </DivContainer>
    </Section>
  );
};
