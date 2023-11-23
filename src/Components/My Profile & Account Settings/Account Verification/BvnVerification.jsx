import React, {useContext} from 'react';
import { ContextProvider } from '../../Context';

export default function BvnVerification() {
    const {bvnVerificationOpen} = useContext(ContextProvider);
    const {verificationOpen} = useContext(ContextProvider)
  return (
    <div>
        {bvnVerificationOpen && (
    <div className= {`${verificationOpen
      ? 'block'  : 'hidden'}`}>
        BvnVerification
        </div>
        )}
        </div>
  )
}
