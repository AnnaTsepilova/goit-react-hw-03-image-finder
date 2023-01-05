import styled from 'styled-components';

export const ImageGalleryContainer = styled.ul`
  display: grid;
  max-width: 1440px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 24px;
  padding-bottom: 24px;

  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  margin: auto;
  padding: 20px;
  font-size: 20px;
`;