

export const truncate = (text,length) => {
  if (text.length > length) {
    let textArray = text.split('')
    let shortened = textArray.splice(0,length).join('')
    return `${shortened}...`
  } else {
    return text
  }
}
