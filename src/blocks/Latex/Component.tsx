export interface LatexBlockProps {
  latex: string
  displayMode?: boolean | null
  id?: string | null
  blockName?: string | null
  blockType?: 'latex'
}

export const LatexBlock: React.FC<LatexBlockProps> = (props) => {
  const { latex, displayMode } = props
  const image = (
    <img
      src={`https://latex.codecogs.com/svg.latex?${encodeURIComponent(latex)}`}
      alt={latex}
    />
  )

  return displayMode ? (
    <div className="my-8 text-center">{image}</div>
  ) : (
    <span className="inline">{image}</span>
  )
}