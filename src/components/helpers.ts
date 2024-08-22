export function stallComponent(ms: number = 1) {
    const startTime = performance.now();
    while (performance.now() - startTime < ms) {
        // Do nothing for 1 ms per item to emulate extremely slow code
    }
};

export const dogProfiles = [
    {
        name: 'Tobi',
        srcUrl: 'https://react19-chat.s3.us-east-1.amazonaws.com/tobi-crop.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGqHK6L%2BOsfF1LRLrfBkFiVjbqyapYgWbV4y%2BO3S%2B9UyAiB7oH6eOvdQmdAy5sALc2iOgOqPSpATEt0Jf7cXR8HlMSrxAgiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDgwNDkwMDg0MTgxNCIMcNT%2BpCpqi1emSzFQKsUCOBhr7LF8EKj2iwFFHRnAp97XDxVYEBqgF3Kp1iY9Fft2yGdIPiaBmdaR7hWsr1wQiZ1taADxkLVJoND9W%2Bo%2F1%2FsDF75JiP6YVLQq23A6TnKA7ySmAucml4LiikiaH0oyslu%2FrfaLQ8Syemxl2p5DtMOhws0BUgN9T%2FjrL%2BAYSHdPxHtKofKMrniiefDFpuuvvEpY5%2B%2BCVw%2BskqjqSP3fKm3GqmjqNNWkEI%2BD%2BFEXAyoi046DX6aH0gG4fpEwFlCyrZLyV0J3Dq5zek0Pf0W4WJDQBoLTtstFOYmtfxBsdH%2BBEAELT63W0JHzQh5KFqxxZErVjJza02zp4E552wINvsBvsnWXO1uppyHP7wCc2Gat8clvV2FmfrIuEq8eO6AkewIUD2nHmsQdndYhc0xjSRhTUkGyqKtsS4zXQtRmQre7G1iC7jC1rZ62Bjq0AqwlVPHv9AonXVzwVE9Oxw3IR1L%2Ff9eeEDsEPlEyVJP7K%2F%2FLc%2FIIZ135osP%2FsJqFO3W%2FN%2Bs7HgmqU3lquy2SKzmc4rEEUtKHLBwXpbA6YLIeItiuQu%2B7UUPNk0GPt4rJaBMUMZ7Hir7LHLGEGNyxd8deaA%2FPdbeg3jbvv1xWvE765KvpYhIGJUOFOwlCxLp59%2Bv0vAOFxNjzlJ4HMUPa%2BSVrKPhZn7jxcWiUFxOYt3hvoHaH%2FGQcS3uogrJuZ2YSokxErWX%2F88vu2ksDugbKZQhPxW1PM%2Fw2ibWU%2F9Pyt9XUiP0Rly3taUlXty1YwK6uulKQSIC3skmvVI3%2BPNNw7YXaP61et98Lt%2Bx7OqD2PVHDCggTFhySRSQQht0JgT1v0syH73MWXhynR5Bam5IqBpVEPCQr&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240822T200205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3WZ6UFFLB6GGXEV2%2F20240822%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c782206f8f0b1042cc4db67c5c7f917584ec75e4394e6c1064bfd82b88e23159',
    },
    {

        name: 'Odie',
        srcUrl: 'https://react19-chat.s3.us-east-1.amazonaws.com/odie-crop.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGqHK6L%2BOsfF1LRLrfBkFiVjbqyapYgWbV4y%2BO3S%2B9UyAiB7oH6eOvdQmdAy5sALc2iOgOqPSpATEt0Jf7cXR8HlMSrxAgiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDgwNDkwMDg0MTgxNCIMcNT%2BpCpqi1emSzFQKsUCOBhr7LF8EKj2iwFFHRnAp97XDxVYEBqgF3Kp1iY9Fft2yGdIPiaBmdaR7hWsr1wQiZ1taADxkLVJoND9W%2Bo%2F1%2FsDF75JiP6YVLQq23A6TnKA7ySmAucml4LiikiaH0oyslu%2FrfaLQ8Syemxl2p5DtMOhws0BUgN9T%2FjrL%2BAYSHdPxHtKofKMrniiefDFpuuvvEpY5%2B%2BCVw%2BskqjqSP3fKm3GqmjqNNWkEI%2BD%2BFEXAyoi046DX6aH0gG4fpEwFlCyrZLyV0J3Dq5zek0Pf0W4WJDQBoLTtstFOYmtfxBsdH%2BBEAELT63W0JHzQh5KFqxxZErVjJza02zp4E552wINvsBvsnWXO1uppyHP7wCc2Gat8clvV2FmfrIuEq8eO6AkewIUD2nHmsQdndYhc0xjSRhTUkGyqKtsS4zXQtRmQre7G1iC7jC1rZ62Bjq0AqwlVPHv9AonXVzwVE9Oxw3IR1L%2Ff9eeEDsEPlEyVJP7K%2F%2FLc%2FIIZ135osP%2FsJqFO3W%2FN%2Bs7HgmqU3lquy2SKzmc4rEEUtKHLBwXpbA6YLIeItiuQu%2B7UUPNk0GPt4rJaBMUMZ7Hir7LHLGEGNyxd8deaA%2FPdbeg3jbvv1xWvE765KvpYhIGJUOFOwlCxLp59%2Bv0vAOFxNjzlJ4HMUPa%2BSVrKPhZn7jxcWiUFxOYt3hvoHaH%2FGQcS3uogrJuZ2YSokxErWX%2F88vu2ksDugbKZQhPxW1PM%2Fw2ibWU%2F9Pyt9XUiP0Rly3taUlXty1YwK6uulKQSIC3skmvVI3%2BPNNw7YXaP61et98Lt%2Bx7OqD2PVHDCggTFhySRSQQht0JgT1v0syH73MWXhynR5Bam5IqBpVEPCQr&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240822T200138Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3WZ6UFFLB6GGXEV2%2F20240822%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7607c719a257e698ae2adfc6cc7a439f4ae080883d0fccaa43fd8f9c4c961269',
    },
];