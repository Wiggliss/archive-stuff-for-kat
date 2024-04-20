class Burgermenu extends HTMLElement {constructor () {super();this.innerHTML =`  
<div class="sidebar">
<input id="sidebar" class="toggle" type="checkbox" checked>
<label for="sidebar" class="sidebarbutton"><img src="../../images/map.webp" class="burger"></label>

<div class="collapsible-contentSidebar">
<div class="collapsible-content-inside">
<input id="WildsBurger" class="toggle" type="checkbox">
<label for="WildsBurger" class="collapsibleSidebar"><h2>Wilds</h2></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
<a href="../../wilds"><span class="MainPagesBurger">Main Page: Wilds (Archive)</span></a><br>
<a href="../../archive/wilds/greatsword"><img src="../../images/greatsword.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/longsword"><img src="../../images/longsword.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/sword_and_shield"><img src="../../images/sns.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/dual_blades"><img src="../../images/db.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/hammer"><img src="../../images/hammer.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/hunting_horn"><img src="../../images/horn.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/lance"><img src="../../images/lance.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/gunlance"><img src="../../images/gunlance.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/switch_axe"><img src="../../images/swaxe.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/charge_blade"><img src="../../images/charge_blade.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/insect_glaive"><img src="../../images/insect_glaive.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/light_bowgun"><img src="../../images/lbg.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/heavy_bowgun"><img src="../../images/hbg.webp" class="WeaponIcon"></a><br>
<a href="../../archive/wilds/bow"><img src="../../images/bow.webp" class="WeaponIcon"></a><br>
</div></div>
<input id="RisebreakBurger" class="toggle" type="checkbox">
<label for="RisebreakBurger" class="collapsibleSidebar"><h2>Rise Sunbreak</h2></label>

<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
<a href="../../rise"><span class="MainPagesBurger">Main Page: Rise (Archive)</span></a><br>
<a href="../../archive/rise/greatsword"><img src="../../images/greatsword.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/longsword"><img src="../../images/longsword.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/sword_and_shield"><img src="../../images/sns.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/dual_blades"><img src="../../images/db.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/hammer"><img src="../../images/hammer.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/hunting_horn"><img src="../../images/horn.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/lance"><img src="../../images/lance.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/gunlance"><img src="../../images/gunlance.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/switch_axe"><img src="../../images/swaxe.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/charge_blade"><img src="../../images/charge_blade.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/insect_glaive"><img src="../../images/insect_glaive.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/light_bowgun"><img src="../../images/lbg.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/heavy_bowgun"><img src="../../images/hbg.webp" class="WeaponIcon"></a><br>
<a href="../../archive/rise/bow"><img src="../../images/bow.webp" class="WeaponIcon"></a><br>
</div></div>


<input id="WorldborneBurger" class="toggle" type="checkbox">
<label for="WorldborneBurger" class="collapsibleSidebar"><h2>World Iceborne</h2></label>

<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
<a href="../../world/world"><span class="MainPagesBurger">Main Page: World (Archive)</span><br></a>
<a href="../../archive/world/greatsword"><img src="../../images/greatsword.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/longsword"><img src="../../images/longsword.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/sword_and_shield"><img src="../../images/sns.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/dual_blades"><img src="../../images/db.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/hammer"><img src="../../images/hammer.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/hunting_horn"><img src="../../images/horn.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/lance"><img src="../../images/lance.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/gunlance"><img src="../../images/gunlance.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/switch_axe"><img src="../../images/swaxe.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/charge_blade"><img src="../../images/charge_blade.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/insect_glaive"><img src="../../images/insect_glaive.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/light_bowgun"><img src="../../images/lbg.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/heavy_bowgun"><img src="../../images/hbg.webp" class="WeaponIcon"></a><br>
<a href="../../archive/world/bow"><img src="../../images/bow.webp" class="WeaponIcon"></a><br>
</div></div>    
<h2>Back to Main Page:</h2><br> <a href="../../index"><img src="../../images/farcaster.webp" class="Side_Img"></a>  <br><br><br><a href="https://www.wiggler.pet"><h2>Back to live Website</h2></a><br><br><br><br><br>      
</div></div>
`}}
if ('customElements' in window) {customElements.define('burger-menu', Burgermenu);}