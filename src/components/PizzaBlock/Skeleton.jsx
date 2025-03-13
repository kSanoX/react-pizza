import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="279" rx="10" ry="10" width="267" height="15" /> 
    <circle cx="134" cy="141" r="123" /> 
    <rect x="3" y="307" rx="10" ry="10" width="267" height="51" /> 
    <rect x="6" y="370" rx="12" ry="12" width="109" height="38" /> 
    <rect x="125" y="366" rx="26" ry="26" width="144" height="46" />
  </ContentLoader>
)

export default Skeleton

