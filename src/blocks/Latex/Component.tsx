export interface LatexBlockProps {
  latex: string
  displayMode?: boolean | null
  blockType: 'latex'
}

export const LatexBlock: React.FC<LatexBlockProps> = (props) => {
  const { latex, displayMode } = props
  const imageURL = `https://latex.codecogs.com/svg.latex?${encodeURIComponent(latex)}`
  const equation = (
    <span className="relative inline-block align-middle leading-none" role="img" aria-label={latex}>
      <img src={imageURL} alt="" aria-hidden="true" className="!m-0 !inline-block opacity-0" />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-current"
        style={{
          maskImage: `url("${imageURL}")`,
          maskRepeat: 'no-repeat',
          maskSize: '100% 100%',
          WebkitMaskImage: `url("${imageURL}")`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
        }}
      />
    </span>
  )

  return (
    <span className={displayMode ? 'my-8 block text-center' : 'inline-block align-middle'}>
      {equation}
    </span>
  )
}
