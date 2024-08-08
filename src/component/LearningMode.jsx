import React from 'react'
import Mode from './Mode'
import { useTranslation } from 'react-i18next'

const LearningMode = (props) => {
  const {t} = useTranslation()
  const goTo = (goto) => {
  nav=props.nav.navigate('PracticeType',{type:goto,title:props.title,words:props.words,listType:props.type})
  }
  return (
    <>
        {props.type=='vocab'?
        <>
        <Mode 
        title={t('ps_learning')} 
        content={t('ps_learning_content')} 
        action={() => goTo('ps')}
        />

        <Mode 
        title={t('ac_learning')} 
        content={t('ac_learning_content')}
        action={() => goTo('ac')}
        />
        
        <Mode 
        title={t('pronunciation')} 
        content={t('pronunciation_content')}
        action={() => goTo('pronunciation')}//go to the modal
        />
        
        </>
        :props.type=='gram'?
        <>
        <Mode 
        
        title={t('ps_learning')} 
        content={t('ps_learning_content')}
        action={() => goTo('ps')}
        />
        
        <Mode 
        title={t('ref_grammar')} 
        content={t('ref_grammar_content')}
        action={() => goTo('ref')}
        />
        
        <Mode 
        title={t('pronunciation')} 
        content={t('pronunciation_content')}
        action={() => goTo('pronunciation')}//go to the modal
        />
        </>
        :
        <>
        <Mode 
        title={t('ps_learning')} 
        content={t('ps_learning_content')}
        action={() => goTo('ps')}
        />

        <Mode 
        title={t('ac_learning')}
        content={t('ac_learning_content')}
        action={() => goTo('ac')}
        />

        <Mode 
        title={t('simon')} 
        content={t('simon_content')}
        action={() => goTo('sim')}//go to the modal
        />

        </>}
    </>
  )
}

export default LearningMode
