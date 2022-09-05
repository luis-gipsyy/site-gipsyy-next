import React, { ReactElement } from 'react';
import { Container } from 'styles/Grid';
import * as Styled from './style';

interface SectionContentProps {
  paddingContent?: boolean;
  color?: string;
  fontSize?: string;
  flexDirection?: string;
  image?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  titleSize?: 'small' | 'medium' | 'large';
  textSize?: 'small' | 'medium' | 'large';
  titleNoMargin?: boolean;
}

const SectionContent = ({
  flexDirection,
  paddingContent,
  image,
  title,
  children,
  titleSize = 'medium',
  textSize = 'medium',
  titleNoMargin,
}: SectionContentProps): ReactElement => {
  return (
    <Container>
      <Styled.Wrapper
        hasPadding={Boolean(paddingContent)}
        hasImage={Boolean(image)}
        hasTitle={Boolean(title)}
        titleSize={titleSize}
        textSize={textSize}
        titleNoMargin={Boolean(titleNoMargin)}
        flexDirection={flexDirection}
      >
        {image && <>{image}</>}
        <div className="content">
          {title && <h2 className="content__title">{title}</h2>}
          {children}
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default SectionContent;
