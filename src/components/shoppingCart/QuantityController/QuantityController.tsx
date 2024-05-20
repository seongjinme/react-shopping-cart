import { QuantityControlType } from '../../../type';
import { QuantityControlButton, QuantityControllerContainer } from './QuantityController.style';

interface QuantityControllerProps {
  quantity: number;
  onChangeQuantity: (type: QuantityControlType) => void;
  minQuantity?: number;
  maxQuantity?: number;
}

export default function QuantityController({
  quantity,
  onChangeQuantity,
  minQuantity = 1,
  maxQuantity = Infinity,
}: QuantityControllerProps) {
  return (
    <QuantityControllerContainer>
      <QuantityControlButton
        type="button"
        $controlType="decrease"
        onClick={() => onChangeQuantity('decrease')}
        disabled={minQuantity >= quantity}
      />
      {quantity}
      <QuantityControlButton
        type="button"
        $controlType="increase"
        onClick={() => onChangeQuantity('increase')}
        disabled={quantity >= maxQuantity}
      />
    </QuantityControllerContainer>
  );
}
