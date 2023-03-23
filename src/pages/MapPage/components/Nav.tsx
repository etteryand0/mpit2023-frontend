import { useAtom } from 'jotai';
import styled from 'styled-components';
import { bottomSheetPageAtom } from '../atom';

const NavItem = styled.span<{ sheetId: number; selected: number }>`
  color: ${({ theme, sheetId, selected }) =>
    sheetId === selected ? theme.text : theme.textParagraph};

  border-bottom: 1px solid
    ${({ theme, sheetId, selected }) =>
      sheetId === selected ? theme.primary : 'transparent'};

  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Navv = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: center;
  margin-top: 5px;
`;

type Props = {
  navItems: string[];
};

const Nav = ({ navItems }: Props) => {
  const [bottomSheetPage, setBottomSheetPage] = useAtom(bottomSheetPageAtom);

  return (
    <Navv>
      {navItems.map((title, i) => (
        <NavItem
          key={`NavItem-${title}`}
          selected={bottomSheetPage}
          sheetId={i}
          onClick={() => setBottomSheetPage(i)}
        >
          {title}
        </NavItem>
      ))}
    </Navv>
  );
};

export default Nav;
