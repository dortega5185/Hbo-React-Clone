const ForYouList = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = []
    for (let index = 0; index < digit; index++) {
      thumbnails.push(comp)
    }
    return thumbnails
  }
  return (
    <div className='foryou-list'>
      <h3 className='foryou-list__title'>For You</h3>
      <div className='foryou-list__thumbnails'>
        {loopComp(
          <div className='foryou-list__thumbnail'>
            <img
              src='/img/rickandmorty.jpg'
              alt='Image of Rick and Morty show poster'
            />
            <div className='foryou-list__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  )
}

export default ForYouList
