import React from 'react'
import { Notes } from '../Notes'
import { NewNote } from '../NewNote'

export function Tabs() {
  return (
    <wired-tabs selected={'New'}>
      <wired-tab name="New">
        <NewNote />
      </wired-tab>
      <wired-tab name="Notes">
        <Notes />
      </wired-tab>
    </wired-tabs>
  )
}
