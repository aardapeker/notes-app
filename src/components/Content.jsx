function Content({block}) {
  let content = ''
  let text
  let align
  let listItems = ''
  let caption
  switch (block.type) {
    case 'paragraph':
      text = block.data.text
      align = block.tunes.textAlignment.alignment
      content = `<p style='text-align: ${align}'>${text}</p>`
      break;
    case 'header':
      const level = block.data.level
      text = block.data.text
      align = block.tunes.textAlignment.alignment
      content = `<h${level} style='text-align: ${align}'>${text}</h${level}>`
      break;
    case 'alert':
      text = block.data.message
      align = block.data.align
      const type = block.data.type
      content = `<div class='alert alert-${type}' style='text-align: ${align}'>${text}</div>`
      break;
    case 'list':
      const style = block.data.style
      block.data.items.map(item => {
        listItems += `<li class='list-group-item'>${item}</li>`
      })
      style === 'unordered' ? 
      content = `<ul class='list-group mb-3'>${listItems}</ul>` :
      content = `<ol class='list-group list-group-numbered mb-3'>${listItems}</ol>`
      break;
    case 'checklist':
      block.data.items.forEach(item => {
        listItems += `
          <li class='list-group-item'>
            <input 
              class='form-check-input me-2'
              type='checkbox'
              ${item.checked && 'checked'}
            />
            <label class='form-check-label'>
              ${item.text}
            </label>
          </li>
        `
      })
      content = `<ul class='list-group mb-3'>${listItems}</ul>`
      break;
    case 'image':
      const url = block.data.url
      caption = block.data.caption
      let imgTag = `
        <img width='500px' class='img-fluid' src='${url}' alt='${caption}'>
        <small class='fst-italic'>${caption}</small>
      `
      content = `<div class='d-flex flex-column align-items-center mb-4'>${imgTag}</div>`
      break;
    case 'embed':
      const embed = block.data.embed
      caption = block.data.caption
      let embedTag = `
        <iframe class='embed img-fluid' width='500px' src='${embed}' allowfullscreen='true'></iframe>
        <small class='position-absolute fst-italic'>${caption}</small>
      `
      content = `<div class='aspect-ratio d-flex justify-content-center mb-4'>${embedTag}</div>`
      break;
    default:
      break;
  }
  return (  
    <div dangerouslySetInnerHTML={{__html: content}} />
  );
}

export default Content;