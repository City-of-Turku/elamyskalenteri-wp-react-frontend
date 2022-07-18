import lookup from "../lookUp";

const DynamicComponent = ({ component, props, locale }) => {
  const Component = lookup[component]
  if (!Component) return null
  return <Component props={props} locale={locale} />
}

export default DynamicComponent