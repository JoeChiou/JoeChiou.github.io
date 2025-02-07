import { StoreButton } from "../../../components"

interface IProps {
  title?: string;
  content?: string;
}
export const Card = ({ title, content }: IProps) => {
  return (
    <div className="card">
      <div className="cardParagraph">
        <div className="cardTitle">{title}</div>
        <div className="cardContent">{content}</div>
        <StoreButton>StoreButton</StoreButton>
      </div>
    </div>
  )
}