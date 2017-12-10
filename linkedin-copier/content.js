const li = {
  name: '.pv-top-card-section__name',
  title: '.pv-top-card-section__headline',
  company: '.pv-top-card-section__company',
  education: '.pv-top-card-section__school',
  location: '.pv-top-card-section__location',
  picture: '.pv-top-card-section__image',
  linkedinUrl: '.pv-contact-info__contact-type.ci-vanity-url a',
  website: '.pv-contact-info__contact-type.ci-websites a',
  phone: '.pv-contact-info__contact-type.ci-phone a',
  email: '.pv-contact-info__contact-type.ci-email a',
  twitter: '.pv-contact-info__contact-type.ci-twitter a',
  birthday: 'pv-contact-info__contact-type ci-birthday div span',
  connected: '.pv-contact-info__contact-type.ci-connected div span',
  paragraph: '.truncate-multiline--truncation-target span'
}

const licopyBtn = '.contact-see-more-less.link-without-visited-state'

let m = {}

if (window.location.origin.match('linkedin.com') != null) {
  console.log('####### HELLO LinkedIN. Runnin Version: 6. #######')

  if (document.querySelector(licopyBtn) != null) {
    copy()
  } else {
    console.log('Observing')

    var observer = new MutationObserver(mutations => {
      console.log('\nWaiting...\n')

      if (document.querySelector(licopyBtn) != null) {
        console.log('\nHere we go... \n')
        copy()
        observer.disconnect()
      }
    })

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    })
  }
}

function copy() {
  console.log('Copying...')
  document.addEventListener('copy', e => {
    var clipboardData = e.clipboardData
    clipboardData.setData('text/plain', renderText(m))
    clipboardData.setData('text/html', renderHtml(m))

    e.preventDefault()
  })

  document.querySelector(licopyBtn).click()

  m.name = (document.querySelector(li.name) || '').innerHTML
  m.title = (document.querySelector(li.title) || '').innerHTML
  m.company = (document.querySelector(li.company) || '').innerHTML
  m.education = (document.querySelector(li.education) || '').innerHTML
  m.location = (document.querySelector(li.location) || '').innerHTML
  m.picture = (document.querySelector(li.picture) || '').src
  m.linkedinUrl = (document.querySelector(li.linkedinUrl) || '').href
  m.website = (document.querySelector(li.website) || '').href
  m.websiteName = (document.querySelector(li.website) || '').innerHTML
  m.phone = (document.querySelector(li.phone) || '').href
  m.phoneName = (document.querySelector(li.phone) || '').innerHTML
  m.email = (document.querySelector(li.email) || '').innerHTML
  m.twitter = (document.querySelector(li.twitter) || '').innerHTML
  m.connected = (document.querySelector(li.connected) || '').innerHTML
  m.paragraph = (document.querySelector(li.paragraph) || '').innerHTML

  document.execCommand('copy')
  licopyDone()
}

function renderHtml(obj) {
  return `
<table>
  <tbody><tr>
    <td>${obj.name || ''}</td>
    <td>${obj.title || ''}</td>
    <td>${obj.company || ''}</td>
    <td>${obj.education || ''}</td>
    <td>${obj.location || ''}</td>
    <td>=image("${obj.picture || ''}")</td>
    <td>${obj.linkedinUrl || ''}</td>
    <td>${obj.website || ''}</td>
    <td>${obj.websiteName || ''}</td>
    <td>${obj.phone || ''}</td>
    <td>${obj.phoneName || ''}</td>
    <td>${obj.email || ''}</td>
    <td>${obj.twitter || ''}</td>
    <td>${obj.connected || ''}</td>
    <td>${obj.paragraph || ''}</td>
  </tr></tbody>
</table>`
}

renderText = obj =>
  ` ${obj.name || ''}, ${obj.title || ''}, ${obj.company ||
    ''}, ${obj.education || ''}, ${obj.location || ''}, ${obj.picture ||
    ''}, ${obj.linkedinUrl || ''}, ${obj.website || ''}, ${obj.websiteName ||
    ''}, ${obj.phone || ''}, ${obj.phoneName || ''}, ${obj.email ||
    ''}, ${obj.twitter || ''}, ${obj.connected || ''}, ${obj.paragraph || ''} `

function licopyDone() {
  const flash = `
    <style>
      .linkedin-flash{

        z-index: 999;
        color: black;
        position: absolute;
        right: 50px;
        top: 30px;
        padding: 10px 50px;
        text-align: center;
        background-color: #8bc34ade;

        animation:signup-response 0.5s 1;
        -webkit-animation:signup-response 0.5s 1;
        animation-fill-mode: forwards;

        animation-delay: 4s;
        -webkit-animation-delay: 4s; /* Safari and Chrome */
        -webkit-animation-fill-mode: forwards;

      }

      @keyframes signup-response{
        from {opacity :1;}
        to {opacity :0;}
      }

      @-webkit-keyframes signup-response{
        from {opacity :1;}
        to {opacity :0;}
      }

    </style>
    <div class="linkedin-flash">
        Copied
    </div>
  `
  document.body.insertAdjacentHTML('afterbegin', flash)
}
