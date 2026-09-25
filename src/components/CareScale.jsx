function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀️' : '💧';

    return (
        <div className="lmj-care-scale" aria-label={`${scaleValue} sur 3`}>
            {range.map((rangeElement) => (
                scaleValue >= rangeElement ? (
                    <span key={rangeElement}>{scaleType}</span>
                ) : null
            ))}
        </div>
    );
}

export default CareScale;
