import { DefaultButton, GreyButton, StoreButton, colors } from "../../components"

export const PageTest = () => {
  return (
    <div style={{
      background: colors.Dark,
      width: '100vw',
      height: '100vh',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}>
      <img src='./images/logo.svg' style={{ width: '218.2px', height: '62.5px' }} />
      <DefaultButton>DefaultButton</DefaultButton>
      <StoreButton>StoreButton</StoreButton>
      <GreyButton>GreyButton</GreyButton>
    </div>
  )
}