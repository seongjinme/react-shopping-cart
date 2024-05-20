import { ErrorResponse, isRouteErrorResponse } from 'react-router-dom';
import * as Styled from './ErrorFallback.style';

interface ErrorFallbackProps {
  error: Error | ErrorResponse;
}

export default function ErrorFallback({ error }: ErrorFallbackProps) {
  const errorMessage = isRouteErrorResponse(error) ? error.statusText : (error as Error).message;

  return (
    <Styled.ErrorContainer>
      <Styled.ErrorTitle>⚠️ 오류가 발생했습니다.</Styled.ErrorTitle>
      <Styled.ErrorDescription>
        아래와 같은 오류가 발생했어요.
        <br />
        서둘러 복구하겠습니다. 🙇‍♂️
      </Styled.ErrorDescription>
      <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
    </Styled.ErrorContainer>
  );
}
