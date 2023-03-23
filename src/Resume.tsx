import resume from './Resume.module.scss'

function Resume() {

  const resumePDF = require('./Assets/resume.pdf')

  return (
    <div className={resume.wrapper}>
      <div className={resume.container}>
        <div className={resume.header}>
          <div className={resume.header__photo}></div>
          <h1>Ринат</h1>
        </div>
        <div className={resume.body}>
          <a 
            href={resumePDF} 
            target="_blank" 
            rel="noreferrer"
            className={resume.pdfFile}
          > Резюме</a>
          <a 
            href='https://github.com/Snasne'
            target="_blank" 
            rel="noreferrer"
            className={resume.githubAccount}
          > Гитхаб</a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
