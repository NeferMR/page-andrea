export function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

export function arc(x, y, radius, startAngle, endAngle, closeShape) {
  const fullCircle = endAngle - startAngle === 360;
  const start = polarToCartesian(
    x,
    y,
    radius,
    endAngle - (fullCircle ? 0.01 : 0)
  );
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    closeShape && !fullCircle ? `L ${x} ${y} Z` : null,
    fullCircle && !closeShape ? "Z" : null,
  ].join(" ");
  return d;
}

export function pie(x, y, radius, startAngle, endAngle) {
  return arc(x, y, radius, startAngle, endAngle, true);
}

export function star(centerX, centerY, points, innerRadius, outerRadius) {
  const degreeIncrement = 360 / (points * 2);
  const d = new Array(points * 2).fill("foo").map((p, i) => {
    let radius = i % 2 == 0 ? outerRadius : innerRadius;
    let degrees = degreeIncrement * i;
    const point = polarToCartesian(centerX, centerY, radius, degrees);
    return `${point.x},${point.y}`;
  });
  return `M${d}Z`;
}
