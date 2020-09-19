import React from 'react';
import './styles/LoginFooter.css';

const LoginFooter = () => {
  return (
    <div className="page-footer container">
      <div id="pageFooter" data-referrer="page_footer" data-testid="page_footer">
        <ul
          className="uiList localeSelectorList _2pid _509- _4ki _6-h _6-j _6-i"
          data-nocookies={1}
        >
          <li>Español</li>
          <li>
            <a
              className="_sv4"
              dir="ltr"
              href="https://www.facebook.com/"
              onClick='require("IntlUtils").setCookieLocale("en_US", "es_LA", "https:\/\/www.facebook.com\/", "www_list_selector", 0); return false;'
              title="English (US)"
            >
              English (US)
            </a>
          </li>
          <li>
            <a
              className="_sv4"
              dir="ltr"
              href="https://pt-br.facebook.com/"
              onClick='require("IntlUtils").setCookieLocale("pt_BR", "es_LA", "https:\/\/pt-br.facebook.com\/", "www_list_selector", 1); return false;'
              title="Portuguese (Brazil)"
            >
              Português (Brasil)
            </a>
          </li>
          <li>
            <a
              className="_sv4"
              dir="ltr"
              href="https://fr-fr.facebook.com/"
              onClick='require("IntlUtils").setCookieLocale("fr_FR", "es_LA", "https:\/\/fr-fr.facebook.com\/", "www_list_selector", 2); return false;'
              title="French (France)"
            >
              Français (France)
            </a>
          </li>
          <li>
            <a
              className="_sv4"
              dir="ltr"
              href="https://de-de.facebook.com/"
              onClick='require("IntlUtils").setCookieLocale("de_DE", "es_LA", "https:\/\/de-de.facebook.com\/", "www_list_selector", 3); return false;'
              title="German"
            >
              Deutsch
            </a>
          </li>
          <li>
            <a
              className="_sv4"
              dir="ltr"
              href="https://it-it.facebook.com/"
              onClick='require("IntlUtils").setCookieLocale("it_IT", "es_LA", "https:\/\/it-it.facebook.com\/", "www_list_selector", 4); return false;'
              title="Italian"
            >
              Italiano
            </a>
          </li>
          <li>
            <a
              className="_sv4"
              dir="ltr"
              href="https://ja-jp.facebook.com/"
              onClick='require("IntlUtils").setCookieLocale("ja_JP", "es_LA", "https:\/\/ja-jp.facebook.com\/", "www_list_selector", 5); return false;'
              title="Japanese"
            >
              日本語
            </a>
          </li>
          <li>
            <a
              className="_sv4"
              dir="rtl"
              href="https://ar-ar.facebook.com/"
              onClick='require("IntlUtils").setCookieLocale("ar_AR", "es_LA", "https:\/\/ar-ar.facebook.com\/", "www_list_selector", 6); return false;'
              title="Arabic"
            >
              العربية
            </a>
          </li>
          <li>
            <a
              className="_sv4"
              dir="ltr"
              href="https://hi-in.facebook.com/"
              onClick='require("IntlUtils").setCookieLocale("hi_IN", "es_LA", "https:\/\/hi-in.facebook.com\/", "www_list_selector", 7); return false;'
              title="Hindi"
            >
              हिन्दी
            </a>
          </li>
          <li>
            <a
              className="_sv4"
              dir="ltr"
              href="https://zh-cn.facebook.com/"
              onClick='require("IntlUtils").setCookieLocale("zh_CN", "es_LA", "https:\/\/zh-cn.facebook.com\/", "www_list_selector", 8); return false;'
              title="Simplified Chinese (China)"
            >
              中文(简体)
            </a>
          </li>
          <li>
            <a
              role="button"
              className="42ft _4jy0 _517i _517h _51sy"
              rel="dialog"
              ajaxify="/settings/language/language/?uri=https%3A%2F%2Fzh-cn.facebook.com%2F&source=www_list_selector_more"
              href="#"
              title="Mostrar más idiomas"
            >
              <i className="img sp_8TNJhCppFOs sx_bd91b1" />
            </a>
          </li>
        </ul>
        <div id="contentCurve" />
        <div id="pageFooterChildren" role="contentinfo" aria-label="Enlaces a sitios de Facebook">
          <ul className="uiList pageFooterLinkList _509- _4ki _703 _6-i">
            <li>
              <a href="/r.php" title="Regístrate en Facebook">
                Registrarte
              </a>
            </li>
            <li>
              <a href="/login/" title="Iniciar sesión en Facebook">
                Iniciar sesión
              </a>
            </li>
            <li>
              <a href="https://messenger.com/" title="Descubre Messenger.">
                Messenger
              </a>
            </li>
            <li>
              <a href="/lite/" title="Facebook Lite para Android.">
                Facebook Lite
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/watch/" title="Explora nuestros videos de Watch.">
                {'{'}' '{'}'}
                Watch{'{'}' '{'}'}
              </a>
            </li>
            <li>
              <a href="/directory/people/" title="Explora nuestro directorio de personas.">
                Personas
              </a>
            </li>
            <li>
              <a href="/directory/pages/" title="Explora nuestro directorio de páginas.">
                Páginas
              </a>
            </li>
            <li>
              <a href="/pages/category/">Categorías de páginas</a>
            </li>
            <li>
              <a href="/places/" title="Descubre lugares populares en Facebook.">
                Lugares
              </a>
            </li>
            <li>
              <a href="/games/" title="Descubre juegos en Facebook.">
                Juegos
              </a>
            </li>
            <li>
              <a href="/directory/places/" title="Explora nuestro directorio de lugares.">
                Ubicaciones
              </a>
            </li>
            <li>
              <a href="/marketplace/" title="Compra y vende artículos en Facebook Marketplace.">
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="https://pay.facebook.com/"
                target="_blank"
                title="Más información sobre Facebook Pay"
              >
                Facebook Pay
              </a>
            </li>
            <li>
              <a href="/directory/groups/" title="Explora nuestro directorio de grupos.">
                Grupos
              </a>
            </li>
            <li>
              <a
                href="https://www.oculus.com/"
                target="_blank"
                title="Más información sobre Oculus"
              >
                Oculus
              </a>
            </li>
            <li>
              <a
                href="https://portal.facebook.com/"
                target="_blank"
                title="Obtén más información sobre Portal from Facebook"
              >
                Portal
              </a>
            </li>
            <li>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AT3G-Gh72GVfImYN5UzX43KNMTHS1B3UrgRLpF6sgSUixd1ungTABnRu9dq7m5R4PaydvGyAwmb1UW5omfU-gNV-hnqgB4H2sdYnb0dzfrpEjBYL0ywmaDthhfL76Ieu30T-NChXOeiyDBSdmzipduPuI4_6SbC7fOchJA"
                title="Descubre Instagram."
                target="_blank"
                rel="noopener nofollow"
                data-lynx-mode="asynclazy"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="/local/lists/245019872666104/"
                title="Explora nuestro directorio de listas locales."
              >
                Local
              </a>
            </li>
            <li>
              <a href="/fundraisers/" title="Haz una donación a causas que te importan.">
                Recaudaciones de fondos
              </a>
            </li>
            <li>
              <a
                href="/biz/directory/"
                title="Explora nuestro directorio de servicios de Facebook."
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
                title="Mira el Centro de información de votación."
              >
                Centro de información de votación
              </a>
            </li>
            <li>
              <a
                href="/facebook"
                accessKey={8}
                title="Lee nuestro blog, descubre el centro de recursos y encuentra ofertas de trabajo."
              >
                Información
              </a>
            </li>
            <li>
              <a
                href="/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&extra_1=auto"
                title="Anúnciate en Facebook."
              >
                Crear anuncio
              </a>
            </li>
            <li>
              <a href="/pages/create/?ref_type=site_footer" title="Crea una página.">
                Crear página
              </a>
            </li>
            <li>
              <a
                href="https://developers.facebook.com/?ref=pf"
                title="Desarrolla en nuestra plataforma."
              >
                Desarrolladores
              </a>
            </li>
            <li>
              <a href="/careers/?ref=pf" title="Únete a nuestra extraordinaria empresa.">
                Empleo
              </a>
            </li>
            <li>
              <a
                data-nocookies={1}
                href="/privacy/explanation"
                title="Infórmate acerca de tu privacidad y Facebook."
              >
                Privacidad
              </a>
            </li>
            <li>
              <a
                href="/policies/cookies/"
                title="Infórmate acerca de las cookies y Facebook."
                data-nocookies={1}
              >
                Cookies
              </a>
            </li>
            <li>
              <a
                className="_41ug"
                data-nocookies={1}
                href="https://www.facebook.com/help/568137493302217"
                title="Conoce las opciones de anuncios."
              >
                Opciones de anuncios
                <i className="img sp_rotgem0VnQW sx_3d66cf" />
              </a>
            </li>
            <li>
              <a
                data-nocookies={1}
                href="/policies?ref=pf"
                accessKey={9}
                title="Consulta nuestras políticas y condiciones."
              >
                Condiciones
              </a>
            </li>
            <li>
              <a href="/help/?ref=pf" accessKey={0} title="Visita nuestro servicio de ayuda.">
                Ayuda
              </a>
            </li>
            <li>
              <a
                accessKey={6}
                className="accessible_elem"
                href="/settings"
                title="Ve y edita tu configuración de Facebook."
              >
                Configuración
              </a>
            </li>
            <li>
              <a
                accessKey={7}
                className="accessible_elem"
                href="/allactivity?privacy_source=activity_log_top_menu"
                title="Ver tu registro de actividad"
              >
                Registro de actividad
              </a>
            </li>
          </ul>
        </div>
        <div className="mvl copyright">
          <div>
            <span> Facebook © 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFooter;
