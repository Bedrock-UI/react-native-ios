import { useCallback } from 'react';
import { ActionSheetIOS } from 'react-native';

interface Option {
  disabled?: boolean;
  destructive?: boolean;
  onPress: () => void;
  title: string;
}

interface CancelOption extends Omit<Option, 'destructive' | 'onPress'> {
  onPress?: () => void;
}

interface Options {
  cancel?: CancelOption;
  options: Option[];
}

function useActionSheet() {
  const showActionSheetWithOptions = useCallback(({ cancel, options }: Options) => {
    const actionSheetOptions = cancel ? [cancel, ...options] : options;
    const actionSheetTitles = actionSheetOptions.map(({ title }) => title);

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: actionSheetTitles,
        destructiveButtonIndex: [
          ...options
            .filter(({ destructive }) => destructive)
            .map((_, index) => (cancel ? index + 1 : index)),
        ],
        disabledButtonIndices: [
          ...actionSheetOptions.filter(({ disabled }) => disabled).map((_, index) => index),
        ],
        cancelButtonIndex: cancel ? 0 : undefined,
        userInterfaceStyle: 'dark',
      },
      (selectedIndex: number) => {
        const option = actionSheetOptions[selectedIndex];

        if (option && option.onPress) {
          return option.onPress();
        }
      }
    );
  }, []);

  return {
    showActionSheetWithOptions,
  };
}

export default useActionSheet;
