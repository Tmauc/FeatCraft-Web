export function defaultSpacing(number) {
  const base = 0.5;
  const rem = number * base + 'rem';
  return rem;
};

export const base = parseFloat(getComputedStyle(document.documentElement).fontSize);

export function pxToRem(size) {
  return size / base + 'rem';
}

// MARGIN
// All
export function ma(value) {
  if (typeof value === 'number') {
    return `
      margin: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Vertical & Horizontal 
export function myx(valueY, valueX) {
  if (typeof valueY === 'number' && typeof valueX === 'number') {
    return `
      margin: ${defaultSpacing(valueY)} ${defaultSpacing(valueX)};
    `;
  } else {
    return '';
  }
}

// Left & Right
export function mx(value) {
  if (typeof value === 'number') {
    return `
      margin-left: ${defaultSpacing(value)};
      margin-right: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Top & Bottom
export function my(value) {
  if (typeof value === 'number') {
    return `
      margin-top: ${defaultSpacing(value)};
      margin-bottom: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Top
export function mt(value) {
  if (typeof value === 'number') {
    return `
      margin-top: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Right
export function mr(value) {
  if (typeof value === 'number') {
    return `
      margin-right: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Bottom
export function mb(value) {
  if (typeof value === 'number') {
    return `
      margin-bottom: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Left
export function ml(value) {
  if (typeof value === 'number') {
    return `
      margin-left: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// PADDING
// All
export function pa(value) {
  if (typeof value === 'number') {
    return `
      padding: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Vertical & Horizontal 
export function pyx(valueY, valueX) {
  if (typeof valueY === 'number' && typeof valueX === 'number') {
    return `
      padding: ${defaultSpacing(valueY)} ${defaultSpacing(valueX)};
    `;
  } else {
    return '';
  }
}

// Left & Right
export function px(value) {
  if (typeof value === 'number') {
    return `
      padding-left: ${defaultSpacing(value)};
      padding-right: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Top & Bottom
export function py(value) {
  if (typeof value === 'number') {
    return `
      padding-top: ${defaultSpacing(value)};
      padding-bottom: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Top
export function pt(value) {
  if (typeof value === 'number') {
    return `
      padding-top: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Right
export function pr(value) {
  if (typeof value === 'number') {
    return `
      padding-right: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Bottom
export function pb(value) {
  if (typeof value === 'number') {
    return `
      padding-bottom: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}

// Left
export function pl(value) {
  if (typeof value === 'number') {
    return `
      padding-left: ${defaultSpacing(value)};
    `;
  } else {
    return '';
  }
}