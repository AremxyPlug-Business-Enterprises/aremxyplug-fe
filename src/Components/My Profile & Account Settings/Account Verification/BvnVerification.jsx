import React, {useContext} from 'react';
import { ContextProvider } from '../../Context';

export default function BvnVerification() {
    const {bvnVerificationOpen} = useContext(ContextProvider)
  return (
    <div>
        {bvnVerificationOpen && (
    <div>
        BvnVerification
        </div>
        )}
        </div>
  )
}
