import searchIcon from '../../assets/icons/search.png'
import navigation from '../../assets/icons/navigation.png'

export const Navigation = () => {
  return (
    <div className="grid grid-cols-3 w-full page-width">
      <img className="" src={searchIcon} alt="" />
      <span className="text-center">METAVERSUS</span>
      <img className="ml-auto" src={navigation} alt="" />
    </div>
  )
}
