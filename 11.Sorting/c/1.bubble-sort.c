#include <stdio.h>
#define LEN 8

int main()
{
  int i, j;
  int arr[LEN] = {5, 3, 6, 8, 7, 9, 2, 1};

  for (i = 0; i < LEN; i++)
  {
    for (j = 0; j < LEN - i; j++)
    {
      if (arr[j] > arr[j + 1])
      {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  printf("After sorting : ");
  for (i = 0; i < LEN - 1; i++)
  {
    printf("%d, ", arr[i]);
  }
}