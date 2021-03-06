import { FC } from 'react'
import styled from '@emotion/styled'

import { colors } from 'utils/constants'
import Flexbox from 'components/shared/Flexbox'

const Empty = styled.p({
  width: '40%',
  opacity: 0 
})

const Flex = styled.div({
  display: 'flex',
  width: '100%',
  color: colors.textGray,
})

const Box = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: '100%'
})

const Authorization: FC = () => (
  <Flexbox col gap='0.5rem'>
    <Flex>
      <Empty />
      <Box>
        <p>I understand that Positive Behavior Supports Corporation (“PBS”) will attempt to verify statements made on my application and made during my employment interview and I give permission for my former employers to answer any and all questions based upon information available to them.</p>
        <p>I understand that false, incomplete or misleading statements or omissions on this application or any other employment form, whether pre- or post-employment, may be considered sufficient cause for dismissal, if and when discovered. For these purposes, all materials that I submit to PBS are considered employment forms. I understand that the use of this application does not indicate there are positions open and does not in any way obligate PBS.</p>
        <p>In addition, I understand that:</p>
        <ul className='list-disc mx-4'>
          <li className='py-2 px-4'>I may be required to submit to drug testing or medical evaluations now or, if hired, at any time in the future and I agree to such testing. My failure or refusal to undergo such testing will result in the withdrawal of my application or my separation.</li>
          <li className='py-2 px-4'>I am giving permission to PBS Corp. to conduct a background check.</li>
          <li className='py-2 px-4'>The Immigration Reform Act of 1986 requires that, after employment, employers verify the legal work authorization and identity of all new employees. An offer of employment will depend upon PBS’s ability to verify my employment eligibility.</li>
          <li className='py-2 px-4'>By signing below I am waiving certain rights regarding this application process or if employed: my right to a jury trial to resolve any lawsuit arising out of this process or if employed; and, my right to participate as a member or representative of a class of similarly situated individuals in any class or collective action lawsuit arising out of this process or if employed.</li>
          <li className='py-2 px-4'>I understand that my failure to sign this form will be considered a withdrawal of my application for employment.</li>
        </ul>
      </Box>
    </Flex>
  </Flexbox>
)

export default Authorization
