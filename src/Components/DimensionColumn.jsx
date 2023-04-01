export const DimensionColumn = ({title,ref}) => {
  return (
    <div ref={ref} className="dimension_column active">
    <p>{title}</p>
</div>
  )
}
