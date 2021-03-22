/** @jsx jsx */
import { jsx } from 'theme-ui';

import {
    Box,
    BoxProps,
    Flex,
    FlexProps,
    Grid,
    GridProps,
    Button,
    ButtonProps,
    Link,
    LinkProps,
    Text,
    TextProps,
    Heading,
    HeadingProps,
    Image,
    ImageProps,
    Card,
    CardProps,
    Label,
    LabelProps,
    Input,
    InputProps,
    Select,
    SelectProps,
    Textarea,
    TextareaProps,
    Radio,
    RadioProps,
    Checkbox,
    CheckboxProps,
    Slider,
    SliderProps,
    Field,
    FieldProps,
    Progress,
    ProgressProps,
    Donut,
    DonutProps,
    Spinner,
    SpinnerProps,
    Avatar,
    AvatarProps,
    Badge,
    BadgeProps,
    Close,
    CloseProps,
    Alert,
    AlertProps,
    Divider,
    DividerProps,
    Embed,
    EmbedProps,
    AspectRatio,
    AspectRatioProps,
    AspectImage,
    AspectImageProps,
    Container,
    ContainerProps,
    NavLink,
    NavLinkProps,
    Message,
    MessageProps,
    IconButton,
    IconButtonProps,
    MenuButton,
    MenuButtonProps,
} from '@theme-ui/components';

const SectionBox = Box.withComponent('section');

const _ = (
    <SectionBox
        css={{ background: '#eee' }}
        sx={{ py: [1, 2, 3], paddingBlockStart: '2em' }}
        px={[3, 2, 1]}
        ref={ref => ref}
    >
        <Box
            onPointerEnter={e => e.pointerType}
            sx={{
                ':first-of-type': {
                    bg: 'red',
                },
            }}
        />
        <Flex />
        <Grid width={[128, null, 192]} backgroundColor="#eee" ref={ref => ref}>
            <Box bg="primary">Box</Box>
            <Box bg="muted">Box</Box>
            <Box bg="primary">Box</Box>
            <Box bg="muted">Box</Box>
        </Grid>
        <Grid gap={2} columns={[2, null, 4]} color="#111">
            <Box bg="primary">Box</Box>
            <Box bg="muted">Box</Box>
            <Box bg="primary">Box</Box>
            <Box bg="muted">Box</Box>
        </Grid>
        <Button
            ref={ref => ref}
            sx={{
                ':hover': {
                    bg: ['red', 'green', 'blue'],
                },
            }}
        />
        <Link href="#" target="_self" bg="blue" ref={r => r} />
        <Text backgroundColor="red" sx={{ py: 1 }} paddingX={[3, 2, 1]} />
        <Heading contentEditable="true" m="1em" />
        <Image />
        <Card />
        <Label />
        <Input value="Hello" onChange={e => console.log(e.target.value)} />
        <Select defaultValue="Hello">
            <option>Hello</option>
            <option>Hi</option>
            <option>Beep</option>
            <option>Boop</option>
        </Select>
        <Textarea defaultValue="Hello" rows={8} />
        <Label>
            <Radio name="dark-mode" value="true" defaultChecked={true} />
            Dark Mode
        </Label>
        <Label>
            <Radio name="dark-mode" value="false" />
            Light Mode
        </Label>
        <Checkbox mx={[1, 2, 3]} defaultChecked={true} />
        <Slider my={[1, 2, 3]} bg="gray" defaultValue={25} />
        <Field
            label="Email"
            name="email"
            defaultValue=""
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
            mx={[1, 2, 3]}
        />
        <Field
            as="textarea"
            label="Message"
            name="message"
            rows={10}
            placeholder="Say hello"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => console.log(e.target.value)}
            mx={[1, 2, 3]}
        />
        <Field
            as={Textarea}
            label="Complaint"
            name="complaint"
            rows={10}
            placeholder="Complain here"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => console.log(e.target.value)}
            px={[1, 2, 3]}
        />
        <Box as="form" onSubmit={e => e.preventDefault()}>
            <Label htmlFor="username">Username</Label>
            <Input name="username" mb={3} />
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" mb={3} />
            <Box>
                <Label mb={3}>
                    <Checkbox />
                    Remember me
                </Label>
            </Box>
            <Label htmlFor="sound">Sound</Label>
            <Select name="sound" mb={3}>
                <option>Beep</option>
                <option>Boop</option>
                <option>Blip</option>
            </Select>
            <Label htmlFor="comment">Comment</Label>
            <Textarea name="comment" rows={6} mb={3} />
            <Flex mb={3}>
                <Label>
                    <Radio name="letter" /> Alpha
                </Label>
                <Label>
                    <Radio name="letter" /> Bravo
                </Label>
                <Label>
                    <Radio name="letter" /> Charlie
                </Label>
            </Flex>
            <Label>Slider</Label>
            <Slider mb={3} />
            <Button>Submit</Button>
        </Box>
        <Progress max={1} value={1 / 2}>
            50%
        </Progress>{' '}
        <Donut value={1 / 2} />
        <Spinner size={100} />
        <Avatar src="https://example.com/example.png" /> <Badge />
        <Close />
        <Alert>
            Beep boop, this is an alert!
            <Close ml="auto" mr={-2} />
        </Alert>{' '}
        <Divider />
        <Embed src="https://www.youtube.com/embed/GNCd_ERZvZM" />{' '}
        <AspectRatio
            ratio={16 / 9}
            sx={{
                p: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'background',
                bg: 'primary',
            }}
        >
            <Heading>Aspect Ratio</Heading>
        </AspectRatio>
        <AspectImage ratio={4 / 3} src="./example.png" />
        <Container p={4} bg="muted">
            Centered container
        </Container>
        <Flex as="nav">
            <NavLink href="#!" p={2}>
                Home
            </NavLink>
            <NavLink href="#!" p={2}>
                Blog
            </NavLink>
            <NavLink href="#!" p={2}>
                About
            </NavLink>
        </Flex>{' '}
        <Message mt={1}>This is just a message for someone to read</Message>{' '}
        <IconButton aria-label="Toggle dark mode" onClick={() => {}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentcolor">
                <circle r={11} cx={12} cy={12} fill="none" stroke="currentcolor" strokeWidth={2} />
            </svg>
        </IconButton>
        <MenuButton aria-label="Toggle Menu" />
    </SectionBox>
);

{
    // test: all components accept their own props

    // Alert
    ((props: AlertProps) => <Alert {...props} />)({});

    // AspectImage
    ((props: AspectImageProps) => <AspectImage {...props} />)({});

    // AspectRatio
    ((props: AspectRatioProps) => <AspectRatio {...props} />)({});

    // Avatar
    ((props: AvatarProps) => <Avatar {...props} />)({});

    // Badge
    ((props: BadgeProps) => <Badge {...props} />)({});

    // Box
    ((props: BoxProps) => <Box {...props} />)({});

    // Button
    ((props: ButtonProps) => <Button {...props} />)({});

    // Card
    ((props: CardProps) => <Card {...props} />)({});

    // Checkbox
    ((props: CheckboxProps) => <Checkbox {...props} />)({});

    // Close
    ((props: CloseProps) => <Close {...props} />)({});

    // Container
    ((props: ContainerProps) => <Container {...props} />)({});

    // Divider
    ((props: DividerProps) => <Divider {...props} />)({});

    // Donut
    ((props: DonutProps) => <Donut {...props} />)({ value: 50 });

    // Embed
    ((props: EmbedProps) => <Embed {...props} />)({});

    // Field
    ((props: FieldProps<'input'>) => <Field {...props} />)({
        label: 'Email',
        name: 'email',
    });

    // Flex
    ((props: FlexProps) => <Flex {...props} />)({});

    // Grid
    ((props: GridProps) => <Grid {...props} />)({});

    // Heading
    ((props: HeadingProps) => <Heading {...props} />)({});

    // IconButton
    ((props: IconButtonProps) => <IconButton {...props} />)({});

    // Image
    ((props: ImageProps) => <Image {...props} />)({});

    // Input
    ((props: InputProps) => <Input {...props} />)({});

    // Label
    ((props: LabelProps) => <Label {...props} />)({});

    // Link
    ((props: LinkProps) => <Link {...props} />)({});

    // MenuButton
    ((props: MenuButtonProps) => <MenuButton {...props} />)({});

    // Message
    ((props: MessageProps) => <Message {...props} />)({});

    // NavLink
    ((props: NavLinkProps) => <NavLink {...props} />)({});

    // Progress
    ((props: ProgressProps) => <Progress {...props} />)({});

    // Radio
    ((props: RadioProps) => <Radio {...props} />)({});

    // Select
    ((props: SelectProps) => <Select {...props} />)({});

    // Slider
    ((props: SliderProps) => <Slider {...props} />)({});

    // Spinner
    ((props: SpinnerProps) => <Spinner {...props} />)({});

    // Text
    ((props: TextProps) => <Text {...props} />)({});

    // Textarea
    ((props: TextareaProps) => <Textarea {...props} />)({});
}
