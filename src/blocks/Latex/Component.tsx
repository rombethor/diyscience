
export interface LatexBlockProps {
  latex: string;
  displayMode?: boolean;
  id?: string | null;
  blockName?: string | null;
  blockType: 'latex';
};

export const LatexBlock: React.FC<LatexBlockProps> = (props) => {
  const { latex, displayMode } = props;

  return (
    <div className={`${displayMode ? 'my-8 text-center' : 'inline'}`}>
      {/* <iframe
        title="LaTeX Equation"
        src={`https://latex.codecogs.com/svg.latex?${encodeURIComponent(latex)}`}
        style={{ border: 'none' }}
      ></iframe> */}
      <img src={`https://latex.codecogs.com/svg.latex?${encodeURIComponent(latex)}`} alt={latex} />
    </div>
  );

};